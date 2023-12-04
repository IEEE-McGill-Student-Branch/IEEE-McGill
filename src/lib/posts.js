import IEEEExtreme from "$images/events/IEEEXtreme.png";
import IEEEDay from "$images/events/IEEEDay.png";
// import IEEESquare from "$images/events/IEEE-Square.png";
import Arduino from "$images/events/Arduino.png"
import AWS from "$images/events/aws-logo.webp"
import * as fs from 'node:fs';

export const posts = [
  {
    slug: "Arduino-Workshop-P1",
    title: "Arduino Workshop - Part 1",
    date: "January 16th, 2024",
    location: "TBA",
    background: Arduino,
    shortDescription: "Coming soon in January!",
    content: fs.readFileSync("src/lib/ArduinoWorkshop-P1.md", "utf-8"),
  },
  {
    slug: "Arduino-Workshop-P2",
    title: "Arduino Workshop - Part 2",
    date: "January 18th, 2024",
    location: "TBA",
    background: Arduino,
    shortDescription: "Coming soon!",
    content: "Coming soon!",
  },
  {
    slug: "ForgeMcGill",
    title: "Forge McGill",
    date: "January 21st, 2024",
    location: "TBA",
    background: Arduino,
    shortDescription: "A hardware hackathon?! in collaboration with The Factory!?!",
    content: "Coming soon!",
  },
  {
    slug: "AWS-Workshop",
    title: "AWS Workshop",
    date: "TBA",
    location: "TBA",
    background: AWS,
    shortDescription: "Coming soon!",
    content: "Coming soon!",
  },
  {
    slug: "IEEE-Day-2023",
    title: "IEEE Day 2023",
    date: "October 3rd, 2023",
    location: "PGSS Inc. Thomson House",
    background: IEEEDay,
    shortDescription:
      "Everything you need to know about IEEE Day 2023: Registration, Venue, and more!",
    content: fs.readFileSync("src/lib/IEEE-Day-2023.md", "utf-8"),
  },

  {
    slug: "IEEEXtreme-17.0",
    title: "IEEEXtreme 17.0",
    date: "October 27th-28th, 2023",
    location: "INRS - Place Bonaventure",
    background: IEEEExtreme,
    shortDescription: "Information about the event, registration, prizes, and more!",
    content: fs.readFileSync("src/lib/IEEEXtreme17.md", "utf-8"),
  },
];
