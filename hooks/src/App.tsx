import React from "react";
import "./App.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

const user = {
  id: 1,
  name: "kouki",
  email: "1112222@aaa.com",
  address: "ADDRESS",
};

export default function App() {
const {getUsers, userProfiles, loading, error} = useAllUsers();
  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />

      {/* エラーが起きた時、文字が赤 */}
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : // エラーが起きないとき、loading...
      loading ? (
        <p>Loading...</p>
      ) : (
        // エラーでもloading...でも無い時に表示させる
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
