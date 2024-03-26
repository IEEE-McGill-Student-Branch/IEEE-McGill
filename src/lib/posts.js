import IEEEExtreme from "$images/events/IEEEXtreme.png";
import IEEEDay from "$images/events/IEEEDay.png";
import Arduino from "$images/events/Arduino.png"
import TheFactory from "$images/events/TheFactoryLogo.png";
import AWS from "$images/events/aws-logo.webp"
import IEEEConcordia from "$images/events/IEEEConcordia.png";
import * as fs from 'node:fs';

export const posts = [
  {
    slug: "AWS-Workshop",
    title: "AWS Workshop",
    date: "April 4th, 2024 | 6:00 PM - 9:00 PM (EDT)",
    location: "WONG 1050 - McGill University",
    background: AWS,
    shortDescription: "Cloud computing workshop with AWS",
    content: fs.readFileSync("src/lib/AWSWorkshop.md", "utf-8"),
  },
  {
    slug: "Arduino-Workshop-P1",
    title: "Arduino Workshop - Part 1",
    date: "January 16th, 2024",
    location: "WONG 1050 - McGill University",
    background: Arduino,
    shortDescription: "Learn about the basics of Arduino!",
    content: fs.readFileSync("src/lib/ArduinoWorkshop-P1.md", "utf-8"),
  },
  {
    slug: "Arduino-Workshop-P2",
    title: "Arduino Workshop - Part 2",
    date: "January 18th, 2024",
    location: "WONG 1050 - McGill University",
    background: Arduino,
    shortDescription: "Advanced techniques and usage of Arduino",
    content: fs.readFileSync("src/lib/ArduinoWorkshop-P2.md", "utf-8"),
  },
  {
    slug: "ForgeMcGill",
    title: "Forge McGill",
    date: "January 20th & 21st, 2024",
    location: "Trottier Building - Floor 0 & Floor 5",
    background: TheFactory,
    shortDescription: "A hardware hackathon organized by The Factory",
    content: fs.readFileSync("src/lib/ForgeMcGill.md", "utf-8"),
  },
  {
    slug: "Robowars",
    title: "Robowars",
    date: "March 14th, 2024",
    location: "TBA",
    background: IEEEConcordia,
    shortDescription: "A robotic competition organized by IEEE Concordia",
    content: fs.readFileSync("src/lib/Robowars.md", "utf-8"),
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
