import IEEEExtreme from "$images/events/IEEEXtreme.png";
import IEEEMcGill from "$images/small_logo.png";
import IEEEDay from "$images/events/IEEEDay.png";
import Arduino from "$images/events/Arduino.png"
import TheFactory from "$images/events/TheFactoryLogo.png";
import AWS from "$images/events/aws-logo.webp"
import IEEEConcordia from "$images/events/IEEEConcordia.png";
/*
old way to fetch content:
  import fs from "fs";
  content = fs.readFileSync("posts/AWSWorkshop.md", "utf-8");
*/

const rootPath = "https://raw.githubusercontent.com/IEEE-McGill-Student-Branch/IEEE-McGill/main/posts/";

/**
 * Get the content of a file from the repository on GitHub
 * @param {string} fileName 
 * @returns the content of the file in string format
 */
async function fetchContent(fileName) {
  /** @type {Promise<string | void>} */
  let content = fetch(rootPath + fileName)
    .then((response) => response.text())
    .then((text) => text)
    .catch((error) => {
      console.error("Error fetching content: ", error);
    });
  return content;
}


export const posts = [
  {
    slug: "AWS-Workshop",
    title: "AWS Workshop",
    date: "April 4th, 2024 | 6:00 PM - 9:00 PM (EDT)",
    location: "279 MacDonald Building - McGill University",
    background: AWS,
    shortDescription: "Cloud computing workshop with AWS",
    content: await fetchContent("AWSWorkshop.md"),
  },
  {
    slug: "IEEE-McGill-Elections-2024",
    title: "IEEE McGill Elections",
    date: "April 8th, 2024 | 6:00 PM - 8:00 PM (EDT)",
    location: "Online",
    background: IEEEMcGill,
    shortDescription: "Your chance to join the IEEE McGill executives team!",
    content: await fetchContent("IEEEElection2024.md"),
  },
  {
    slug: "IEEE-Social-Event",
    title: "IEEE Social Event",
    date: "May 1st, 2024 | 5:30 PM - 7:30 PM (EDT)",
    location: "TBA",
    background: IEEEMcGill,
    shortDescription: "Meet the execs and have a good time!",
    content: await fetchContent("IEEESocial.md"),
  },
  {
    slug: "Arduino-Workshop-P1",
    title: "Arduino Workshop - Part 1",
    date: "January 16th, 2024",
    location: "WONG 1050 - McGill University",
    background: Arduino,
    shortDescription: "Learn about the basics of Arduino!",
    content: await fetchContent("ArduinoWorkshop-P1.md"),
  },
  {
    slug: "Arduino-Workshop-P2",
    title: "Arduino Workshop - Part 2",
    date: "January 18th, 2024",
    location: "WONG 1050 - McGill University",
    background: Arduino,
    shortDescription: "Advanced techniques and usage of Arduino",
    content: await fetchContent("ArduinoWorkshop-P2.md"),
  },
  {
    slug: "ForgeMcGill",
    title: "Forge McGill",
    date: "January 20th & 21st, 2024",
    location: "Trottier Building - Floor 0 & Floor 5",
    background: TheFactory,
    shortDescription: "A hardware hackathon organized by The Factory",
    content: await fetchContent("ForgeMcGill.md"),
  },
  {
    slug: "Robowars",
    title: "Robowars",
    date: "March 14th, 2024",
    location: "TBA",
    background: IEEEConcordia,
    shortDescription: "A robotic competition organized by IEEE Concordia",
    content: await fetchContent("Robowars.md"),
  },
  {
    slug: "IEEE-Day-2023",
    title: "IEEE Day 2023",
    date: "October 3rd, 2023",
    location: "PGSS Inc. Thomson House",
    background: IEEEDay,
    shortDescription:
      "Everything you need to know about IEEE Day 2023: Registration, Venue, and more!",
    content: await fetchContent("IEEE-Day-2023.md"),
  },

  {
    slug: "IEEEXtreme-17.0",
    title: "IEEEXtreme 17.0",
    date: "October 27th-28th, 2023",
    location: "INRS - Place Bonaventure",
    background: IEEEExtreme,
    shortDescription: "Information about the event, registration, prizes, and more!",
    content: await fetchContent("IEEEXtreme17.md"),
  },
];
