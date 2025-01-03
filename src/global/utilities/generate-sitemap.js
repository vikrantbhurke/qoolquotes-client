import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/sign-in", changefreq: "weekly", priority: 0.8 },
  { url: "/sign-up", changefreq: "weekly", priority: 0.8 },
  {
    url: `/topics?page=1&sort=name&order=Asc&alpha=All`,
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: `/authors?page=1&sort=name&order=Asc&alpha=All`,
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: `/playlists?page=1&sort=createdAt&order=Desc`,
    changefreq: "weekly",
    priority: 0.8,
  },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: "https://qoolquotes.com" });
  links.forEach((link) => stream.write(link));
  stream.end();

  const sitemap = await streamToPromise(stream).then((data) => data.toString());
  fs.writeFileSync("./public/sitemap.xml", sitemap);
}

generateSitemap();
