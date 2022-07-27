import React, { useEffect, useState, useRef } from "react";
import homeCms from "../../assets/cms/home.png";
import productCms from "../../assets/cms/product.png";
import productsCms from "../../assets/cms/products.png";
import workflowCms from "../../assets/cms/workflow.png";
import homeBlog from "../../assets/blog/home.png";
import postBlog from "../../assets/blog/post.png";
import sidebarBlog from "../../assets/blog/sidebar.png";
import apiKeyBlog from "../../assets/blog/apiKeys.png";
import homeOclay from "../../assets/oclay/home.png";
import productOclay from "../../assets/oclay/product.png";
import shopOclay from "../../assets/oclay/shop.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Project() {
  const [project, setProject] = useState("cms");
  const [image, setImage] = useState(homeCms);

  const [interval, setInterval] = useState(0);

  useInterval(() => {
    setImage(getImage(project));
  }, 4000);

  const getImage = (project) => {
    if (project == "cms") {
      console.log(interval);

      if (interval == 0) {
        setInterval(interval + 1);
        return homeCms;
      } else if (interval == 1) {
        setInterval(interval + 1);
        return productsCms;
      } else if (interval == 2) {
        setInterval(interval + 1);
        return productCms;
      } else if (interval == 3) {
        setInterval(0);
        return workflowCms;
      }
    } else if (project == "oclay") {
      if (interval == 0) {
        setInterval(interval + 1);
        return homeOclay;
      } else if (interval == 1) {
        setInterval(interval + 1);
        return productOclay;
      } else if (interval == 2) {
        setInterval(0);
        return shopOclay;
      }
    } else {
      if (interval == 0) {
        setInterval(interval + 1);
        return homeBlog;
      } else if (interval == 1) {
        setInterval(interval + 1);
        return postBlog;
      } else if (interval == 2) {
        setInterval(0);
        return apiKeyBlog;
      }
    }

    return homeCms;
  };

  const setPro = (dir) => {
    console.log(project);
    let currPro = project;
    if (dir === 1) {
      if (project == "cms") {
        setProject("oclay");
        currPro = "oclay";
      } else if (project == "oclay") {
        setProject("blog");
        currPro = "blog";
      } else {
        setProject("cms");
        currPro = "cms";
      }
    } else {
      if (project == "cms") {
        setProject("blog");
      } else if (project == "blog") {
        setProject("oclay");
      } else {
        setProject("cms");
      }
    }
    console.log(project);
    setInterval(0);
    console.log(interval);
    setImage(getImage(currPro));
  };

  const getTitle = () => {
    if (project == "cms") {
      return (
        <a href="https://github.com/mmaierhofer/next-webshop">
          Headless Webshop Management System
        </a>
      );
    } else if (project == "oclay") {
      return <a href="https://oclay.de">Webshop for Ceramics</a>;
    } else if (project == "blog") {
      return (
        <a href="https://github.com/mmaierhofer/blogCMS">
          Content Management System for Blogs
        </a>
      );
    }
  };

  const getText = () => {
    if (project == "cms") {
      return (
        "Created with Next.js, Google Firebase Realtime Database, " +
        "Google Firebase Authentication and Google Cloud Functions. " +
        "Deployed with Vercel. The project (WIP) features the creation " +
        "of products, tracks the sales, features users with different " +
        "roles and custom workflows. The connection with the shop works " +
        "over API-Keys."
      );
    } else if (project == "oclay") {
      return (
        "The main focus in creating this webshop lied in the simplicity. " +
        "The products are the main star and the eyecatchers of the business. " +
        "Even though this might not be a great showcase for technical ability " +
        "it shows the process of creating something out of nothing. " +
        "Aided by social media marketing, we managed to create a couple thousand euros " +
        "in revenue each month."
      );
    } else if (project == "blog") {
      return (
        "I always wanted to create my own blog, but was on the one hand " +
        "never satisfied with the free options, and on the other hand I " +
        "just love fitting things to my likings. " +
        "Especially the mobile preview was one of the key features that I " +
        "really enjoyed implementing and using. It is WIP and the blog is " +
        "yet to come."
      );
    }
  };

  const getTabs = () => {
    if (project == "cms") {
      return (
        <div className="flex justify-between">
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            NextJS
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Realtime Database
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Google Cloud Functions
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Vercel
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Firebase Authentication
          </div>
        </div>
      );
    } else if (project == "oclay") {
      return (
        <div className="flex justify-between">
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Design
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            User Experience
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Conversion
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Simplicity
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Business
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            CMS
          </div>
        </div>
      );
    } else if (project == "blog") {
      return (
        <div className="flex justify-between">
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            React
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Cloud Firestore
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Github Actions
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Firebase
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Vercel
          </div>
          <div className="text-slate rounded w-fit pl-4 pr-4 pt-2 pb-2 bg-green-200">
            Innovation
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-1/2">
          <div className="text-white text-2xl font-mono">
            <span className="text-green-200">03.</span> A little show case
          </div>
          <div>
            <div className="h-96 w-full relative">
              <div className="left-0 w-full absolute">
                <img src={image} />
              </div>
              <div className="w-3/5 absolute right-0 h-2/3 top-1/4 flex justify-center items-center bg-slate-800/90 text-white"></div>
              <div className="w-3/5 absolute right-0 h-2/3 top-1/4 flex p-4 text-white flex-col ">
                <div className="text-lg text-green-200">{getTitle()}</div>
                <div className="text-justify mt-4">{getText()}</div>
              </div>
            </div>
          </div>
          {getTabs()}
          <div
            className="text-white absolute top-1/2 right-64 text-3xl cursor-pointer"
            onClick={(e) => setPro(1)}
          >
            <IoIosArrowForward />
          </div>
          <div
            className="text-white absolute top-1/2 left-64 text-3xl cursor-pointer"
            onClick={(e) => setPro(-1)}
          >
            <IoIosArrowBack />
          </div>
        </div>
      </div>
    </>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
