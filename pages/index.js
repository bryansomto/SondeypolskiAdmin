import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h3>
          Hello, <b>{session?.user?.name}</b>
        </h3>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <Image
            src={session?.user?.image}
            alt={`An image of ${session?.user?.name}`}
            width={24}
            height={24}
          />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
