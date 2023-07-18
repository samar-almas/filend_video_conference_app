import { useState } from "react";
import HomePageGraphic from "../../assets/animation.gif";
import Navbar from "../../components/navbar";
import { BsFillKeyboardFill } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import Modal from "../../components/modal";

const Home = () => {
  const [roomId, setRoomId] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          roomId={roomId}
        />
      )}
      <Navbar />
      <div className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        <div className="md:flex mx-auto w-[90%] items-center justify-center md:h-5/6">
          <div className=" mt-10 md:basis-3/4">
            <div className="-mt-10">
              <h1 className="text-3xl leading-tight md:text-5xl">
                High-quality video conferences.
                <br />
                Now accessible to all.
              </h1>
              <p className="mt-8 text-base md:text-lg ">
                Reimagining Video Conferencing: Introducing Our Secure Business
                Meetings App, Now Free and Available for All.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder=" Enter Room Code"
                      required
                      className=" text-xl pl-16 py-4 rounded-md border border-gray-700"
                      onChange={(e) => setRoomId(e.target.value)}
                    />
                    <span className="absolute left-5 top-1/2 transform -translate-y-1/2">
                      <BsFillKeyboardFill size={30} />
                    </span>
                  </div>
                  <div className="my-5 md:mx-5">
                    <button
                      type="submit"
                      className=" bg-blue-700 px-16 py-4 text-white text-lg rounded-lg flex items-center hover:bg-blue-600"
                    >
                      <BiVideoPlus size={30} className="mr-1" />
                      Join
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
            <img
              src={HomePageGraphic}
              alt="Home-
            Page-Graphic"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
