import BlogPost from "@/components/BlogPost";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <>
      <div className="ml-20">
        <div className="text-white flex ml-36">
          <div className="flex-1 rounded-2xl mr-4">
            <BlogPost/>
          </div>
          <div
            className="flex-1 pr-10 space-y-5 bg-gray-900 pl-10 rounded-2xl h-fit pb-10 mr-4"
            style={{ marginLeft: 0 }}
          >
            <div className="flex font-extrabold mt-2">Who is to follow you</div>
            <div style={{ marginLeft: 4 }}>
              <UserCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
