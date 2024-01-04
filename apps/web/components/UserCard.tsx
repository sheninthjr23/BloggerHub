"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { USER_DETAIL } from "gql";
import { useSession } from "next-auth/react";
import { useRecoilValue } from "recoil";
import { userDetails } from "../../../packages/store/atoms/userDetails";

const UserCard = () => {
  const { data: session } = useSession();
  const userState = useRecoilValue(userDetails)
  console.log(userState)
  const { loading, error, data } = useQuery(USER_DETAIL);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const users = data.getAllUser;
  return (
    <>
      <div className="flex flex-col space-y-3">
        {users.map((user: any) => (
          userState.id === user.id ? null : (
          <div key={user.id} className="bg-black">
            <div className="card w-80 flex justify-center items-start p-6 h-20 bg-base-100 shadow-xl border border-slate-400">
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center space-x-2">
                  <div className="avatar w-10 h-10">
                    <img
                      className="rounded-2xl"
                      src={user.image}
                      alt={user.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-white">{user.name}</div>
                  </div>
                </div>
                <div className="pl-4 bg-white rounded-lg text-black w-20">
                  <button>Follow</button>
                </div>
              </div>
            </div>
          </div>
        )
        ))}
      </div>
    </>
  );
};

export default UserCard;