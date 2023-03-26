import Head from "next/head";
import NoteList from "@/components/NoteList";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(true);
  const modalShowHandler = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <Head>
        <title>Study App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* the main app body */}
      <Navbar createNote={modalShowHandler} />
      <NoteList newNote={modalVisible} hideModal={modalShowHandler} />
    </>
  );
}
