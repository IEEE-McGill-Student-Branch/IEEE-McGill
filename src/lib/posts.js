import IEEEExtreme from "$images/events/IEEEXtreme.png";
import IEEEMcGill from "$images/small_logo.png";
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
    location: "279 MacDonald Building - McGill University",
    background: AWS,
    shortDescription: "Cloud computing workshop with AWS",
    content: fs.readFileSync("posts/AWSWorkshop.md", "utf-8"),
  },
  {
    slug: "IEEE-McGill-Elections-2024",
    title: "IEEE McGill Elections",
    date: "April 8th, 2024 | 6:00 PM - 8:00 PM (EDT)",
    location: "Online",
    background: IEEEMcGill,
    shortDescription: "Your chance to join the IEEE McGill executives team!",
    content: fs.readFileSync("posts/IEEEElection2024.md", "utf-8"),
  },
  {
    slug: "IEEE-Social-Event",
    title: "IEEE Social Event",
    date: "May 1st, 2024 | 5:30 PM - 7:30 PM (EDT)",
    location: "TBA",
    background: IEEEMcGill,
    shortDescription: "Meet the execs and have a good time!",
    content: fs.readFileSync("posts/IEEESocial.md", "utf-8"),
  },
  {
    slug: "Arduino-Workshop-P1",
    title: "Arduino Workshop - Part 1",
    date: "January 16th, 2024",
    location: "WONG 1050 - McGill University",
    background: Arduino,
    shortDescription: "Learn about the basics of Arduino!",
    content: fs.readFileSync("posts/ArduinoWorkshop-P1.md", "utf-8"),
  },
  {
    slug: "Arduino-Workshop-P2",
    title: "Arduino Workshop - Part 2",
    date: "January 18th, 2024",
    location: "WONG 1050 - McGill University",
    background: Arduino,
    shortDescription: "Advanced techniques and usage of Arduino",
    content: fs.readFileSync("posts/ArduinoWorkshop-P2.md", "utf-8"),
  },
  {
    slug: "ForgeMcGill",
    title: "Forge McGill",
    date: "January 20th & 21st, 2024",
    location: "Trottier Building - Floor 0 & Floor 5",
    background: TheFactory,
    shortDescription: "A hardware hackathon organized by The Factory",
    content: fs.readFileSync("posts/ForgeMcGill.md", "utf-8"),
  },
  {
    slug: "Robowars",
    title: "Robowars",
    date: "March 14th, 2024",
    location: "TBA",
    background: IEEEConcordia,
    shortDescription: "A robotic competition organized by IEEE Concordia",
    content: fs.readFileSync("posts/Robowars.md", "utf-8"),
  },
  {
    slug: "IEEE-Day-2023",
    title: "IEEE Day 2023",
    date: "October 3rd, 2023",
    location: "PGSS Inc. Thomson House",
    background: IEEEDay,
    shortDescription:
      "Everything you need to know about IEEE Day 2023: Registration, Venue, and more!",
    content: fs.readFileSync("posts/IEEE-Day-2023.md", "utf-8"),
  },

  {
    slug: "IEEEXtreme-17.0",
    title: "IEEEXtreme 17.0",
    date: "October 27th-28th, 2023",
    location: "INRS - Place Bonaventure",
    background: IEEEExtreme,
    shortDescription: "Information about the event, registration, prizes, and more!",
    content: fs.readFileSync("posts/IEEEXtreme17.md", "utf-8"),
  },
];
