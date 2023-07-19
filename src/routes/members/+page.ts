import type { PageLoad } from "./$types";
import { browser } from "$app/environment";

export const load = (async () => {
  return {
    members: await getMember(),
  };
}) satisfies PageLoad;

async function getMember() {
  const remoteMemberList = await fetch(
    "https://raw.githubusercontent.com/notkaramel/IEEE-McGill/main/src/data/team.json"
  ).then((res) => res.json());

  let memberList = [];
  for (let member in remoteMemberList) {
    const memberID = remoteMemberList[member].id;
    if (browser) {
      const memberArticle = document.getElementById(memberID);
      
      let memberImageSrc = await fetch(`https://raw.githubusercontent.com/notkaramel/IEEE-McGill/main/static/images/${memberID}.jpg`)
      .then((res) => res.blob())
      .then((blob) => {
        if (blob.type === "image/jpeg" || blob.type === "image/png") {
          const url = URL.createObjectURL(blob);
          let img = document.createElement("img") as HTMLImageElement;
          img.src = url;
          memberArticle?.appendChild(img);
          console.log(url);
          return url;
        }
        else {
          return "https://raw.githubusercontent.com/notkaramel/IEEE-McGill/main/static/images/blankPFP.png";
        }
      });
      
      memberList.push({
        name: remoteMemberList[member].name,
        pronouns: remoteMemberList[member].pronouns,
        role: remoteMemberList[member].role,
        email: remoteMemberList[member].email,
        profilePicSrc: memberImageSrc,
        id: memberID
      });
    }
  }
  //   console.log(memberList);
  return memberList;
}
