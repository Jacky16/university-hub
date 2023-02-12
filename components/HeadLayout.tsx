import Head from "next/head";
import { HeadStructure } from "types/types";

interface HeadLayoutProps {
  headData: HeadStructure;
}

const HeadLayout = ({ headData: { title, description } }: HeadLayoutProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default HeadLayout;
