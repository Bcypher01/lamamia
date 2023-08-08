import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // next: { revalidate: 10 },
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>Desc</p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>User</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className="">
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          reiciendis deleniti blanditiis, neque odit magnam iusto omnis.
          Nesciunt laboriosam commodi earum dolore. A ex esse facilis voluptas
          illo aliquid quam?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
