import IEEEExtreme from "$images/events/IEEEXtreme.png";
import IEEEMcGill from "$images/small_logo.png";
import IEEEDay from "$images/events/IEEEDay.png";
import Arduino from "$images/events/Arduino.png"
import TheFactory from "$images/events/TheFactoryLogo.png";
import AWS from "$images/events/aws-logo.webp"
import IEEEConcordia from "$images/events/IEEEConcordia.png";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Get the project root directory
// File is at src/lib/posts.js, so we go up 2 levels to get to project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // src/lib
const projectRoot = join(__dirname, "..", ".."); // Go up to project root

const rootPath = "https://raw.githubusercontent.com/IEEE-McGill-Student-Branch/IEEE-McGill/main/posts/";
const isDev = import.meta.env.DEV;

/**
 * Get the content of a file from local filesystem (dev) or GitHub (prod)
 * @param {string} fileName 
 * @returns the content of the file in string format
 */
async function fetchContent(fileName) {
  if (isDev) {
    // In dev mode, read from local filesystem for hot-reloading
    try {
      const filePath = join(projectRoot, "posts", fileName);
      return readFileSync(filePath, "utf-8");
    } catch (error) {
      console.error(`Error reading local file ${fileName}:`, error);
      return "";
    }
  } else {
    // In production, fetch from GitHub
    try {
      const response = await fetch(rootPath + fileName);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
      }
      return await response.text();
    } catch (error) {
      console.error(`Error fetching content from GitHub for ${fileName}:`, error);
      return "";
    }
  }
}

/**
 * Post metadata configuration
 */
const postConfigs = [
  {
    slug: "AWS-Workshop",
    title: "AWS Workshop",
    date: "April 4th, 2024 | 6:00 PM - 9:00 PM (EDT)",
    location: "279 MacDonald Building - McGill University",
    background: AWS,
    shortDescription: "Cloud computing workshop with AWS",
    fileName: "AWSWorkshop.md",
  },
  {
    slug: "IEEE-McGill-Elections-2024",
    title: "IEEE McGill Elections",
    date: "April 8th, 2024 | 6:00 PM - 8:00 PM (EDT)",
    location: "Online",
    background: IEEEMcGill,
    shortDescription: "Your chance to join the IEEE McGill executives team!",
    fileName: "IEEEElection2024.md",
  },
  {
    slug: "IEEE-Social-Event",
    title: "IEEE Social Event",
    date: "May 1st, 2024 | 5:30 PM - 7:30 PM (EDT)",
    location: "TBA",
    background: IEEEMcGill,
    shortDescription: "Meet the execs and have a good time!",
    fileName: "IEEESocial.md",
  },
  {
    slug: "Arduino-Workshop-P1",
    title: "Arduino Workshop - Part 1",
    date: "January 16th, 2024",
    location: "WONG 1050 - McGill University",
    background: Arduino,
    shortDescription: "Learn about the basics of Arduino!",
    fileName: "ArduinoWorkshop-P1.md",
  },
  {
    slug: "Arduino-Workshop-P2",
    title: "Arduino Workshop - Part 2",
    date: "January 18th, 2024",
    location: "WONG 1050 - McGill University",
    background: Arduino,
    shortDescription: "Advanced techniques and usage of Arduino",
    fileName: "ArduinoWorkshop-P2.md",
  },
  {
    slug: "ForgeMcGill",
    title: "Forge McGill",
    date: "January 20th & 21st, 2024",
    location: "Trottier Building - Floor 0 & Floor 5",
    background: TheFactory,
    shortDescription: "A hardware hackathon organized by The Factory",
    fileName: "ForgeMcGill.md",
  },
  {
    slug: "Robowars",
    title: "Robowars",
    date: "March 14th, 2024",
    location: "TBA",
    background: IEEEConcordia,
    shortDescription: "A robotic competition organized by IEEE Concordia",
    fileName: "Robowars.md",
  },
  {
    slug: "IEEE-Day-2023",
    title: "IEEE Day 2023",
    date: "October 3rd, 2023",
    location: "PGSS Inc. Thomson House",
    background: IEEEDay,
    shortDescription:
      "Everything you need to know about IEEE Day 2023: Registration, Venue, and more!",
    fileName: "IEEE-Day-2023.md",
  },
  {
    slug: "IEEEXtreme-17.0",
    title: "IEEEXtreme 17.0",
    date: "October 27th-28th, 2023",
    location: "INRS - Place Bonaventure",
    background: IEEEExtreme,
    shortDescription: "Information about the event, registration, prizes, and more!",
    fileName: "IEEEXtreme17.md",
  },
];

/**
 * @typedef {Object} Post
 * @property {string} slug - Unique identifier for the post
 * @property {string} title - Title of the post
 * @property {string} date - Date of the event
 * @property {string} location - Location of the event
 * @property {string} background - Background image URL
 * @property {string} shortDescription - Short description of the event
 * @property {string} content - Full markdown content of the post
 */

/**
 * Load all posts with their content
 * This function is called dynamically to enable hot-reloading in dev mode
 * @returns {Promise<Post[]>} Array of post objects with content
 */
export async function loadPosts() {
  const posts = await Promise.all(
    postConfigs.map(async (config) => {
      const content = await fetchContent(config.fileName);
      return {
        slug: config.slug,
        title: config.title,
        date: config.date,
        location: config.location,
        background: config.background,
        shortDescription: config.shortDescription,
        content: content,
      };
    })
  );
  return posts;
}

// Export postConfigs for cases where only metadata is needed
export { postConfigs };
