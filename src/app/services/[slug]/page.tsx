import React from "react";
import { getPost, getCategories } from "../../../utils/api";
import PostDetails from "../../../components/PostDetails";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const post = await getPost(params.slug);
  const categories = await getCategories();

  return (
    <div className="w-full overflow-x-hidden">
      <PostDetails post={post} categories={categories} />
    </div>
  );
}
