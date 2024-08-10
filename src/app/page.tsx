import React, { Suspense } from "react";
import { getHomeData } from "@/utils/actions/home";
import Avatar from "@/components/avatar";
import Skeleton from "@/components/skeleton";

interface HomeData {
  message: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  version: string;
  date: Date;
  supportContact: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    hashnode: string;
    githubIssues: string;
  };
}

export default async function Home() {
  const response = await getHomeData();
  console.log(response);

  const {
    message,
    title,
    description,
    author,
    version,
    date,
    supportContact,
    socialLinks,
  }: HomeData = response;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <Suspense fallback={<Skeleton />}>
          <Avatar src={author.avatar} alt={author.name} />
        </Suspense>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">{description}</p>
        <p className="mt-2 text-sm text-gray-500">Author: {author.name}</p>
        <p className="mt-2 text-sm text-gray-500">Version: {version}</p>
        <p className="mt-2 text-sm text-gray-500">
          Date: {new Date(date).toLocaleDateString()}
        </p>
        <p className="mt-2 text-sm text-gray-500">Support: {supportContact}</p>
        <div className="mt-4">
          <p className="text-lg">Social Links:</p>
          <ul className="list-disc list-inside">
            <li>
              <a
                href={socialLinks.twitter}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href={socialLinks.linkedin}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={socialLinks.hashnode}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hashnode
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-lg">Discover any problems? Report them at:</p>
          <a
            href={socialLinks.githubIssues}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Issues
          </a>
        </div>
        <p className="mt-6 text-xl">{message}</p>
      </div>
    </main>
  );
}
