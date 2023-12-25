/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Blog = () => {
  return (
    <div className="py-[7rem] dark:bg-black  bg-slate-400 text-red-500 dark:text-white ">
      <div className="container">
        <h2 className="text-blue-500  py-3 text-2xl">
          <a href="#">Popular Thrilling Posts</a>{" "}
        </h2>
        <div className="grid grid-cols-6 gap-10 ">
          <div className="col-span-6  md:col-span-3 border-1 border-blue-500 rounded-4">
            <div className="border-b border-blue-500 p-4 flex items-center justify-between">
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, tempore.
              </h3>
              <img
                className="rounded-full"
                src="./images/userava1.jpg"
                alt=""
              />
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut
              ipsam animi temporibus debitis pariatur enim amet autem!
              Voluptatum recusandae nemo adipisci ipsam, doloremque ab ratione
              officia quis voluptatem temporibus!
            </p>
            <div className="border-t border-blue-500 p-4 flex items justify-end space-x-4 font-bold font-font1">
              <p>ON JAN 17,2024</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>2</p>
              </div>
            </div>
          </div>
          <div className=" col-span-6  md:col-span-3  border-1 border-blue-500 rounded-4">
            <div className="border-b border-blue-500 p-4 flex items-center justify-between">
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, tempore.
              </h3>
              <img
                className="rounded-full"
                src="./images/userava2.jpg"
                alt=""
              />
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut
              ipsam animi temporibus debitis pariatur enim amet autem!
              Voluptatum recusandae nemo adipisci ipsam, doloremque ab ratione
              officia quis voluptatem temporibus!
            </p>
            <div className="border-t border-blue-500 p-4 flex items justify-end space-x-4 font-bold font-font1">
              <p>ON JAN 17,2024</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>2</p>
              </div>
            </div>
          </div>
          <div className=" col-span-6  lg:col-span-2  border-1 border-blue-500 rounded-4">
            <div className="border-b border-blue-500 p-4 flex items-center justify-between">
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, tempore.
              </h3>
              <img
                className="rounded-full"
                src="./images/userava3.jpg"
                alt=""
              />
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut
              ipsam animi temporibus debitis pariatur enim amet autem!
              Voluptatum recusandae nemo adipisci ipsam, doloremque ab ratione
              officia quis voluptatem temporibus!
            </p>
            <div className="border-t border-blue-500 p-4 flex items justify-end space-x-4 font-bold font-font1">
              <p>ON JAN 17,2024</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>2</p>
              </div>
            </div>
          </div>
          <div className=" col-span-6  lg:col-span-2  border-1 border-blue-500 rounded-4">
            <div className="border-b border-blue-500 p-4 flex items-center justify-between">
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, tempore.
              </h3>
              <img
                className="rounded-full"
                src="./images/userava4.jpg"
                alt=""
              />
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut
              ipsam animi temporibus debitis pariatur enim amet autem!
              Voluptatum recusandae nemo adipisci ipsam, doloremque ab ratione
              officia quis voluptatem temporibus!
            </p>
            <div className="border-t border-blue-500 p-4 flex items justify-end space-x-4 font-bold font-font1">
              <p>ON JAN 17,2024</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>2</p>
              </div>
            </div>
          </div>
          <div className=" col-span-6  lg:col-span-2  border-1 border-blue-500 rounded-4">
            <div className="border-b border-blue-500 p-4 flex items-center justify-between">
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, tempore.
              </h3>
              <img
                className="rounded-full"
                src="./images/userava5.jpg"
                alt=""
              />
            </div>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut
              ipsam animi temporibus debitis pariatur enim amet autem!
              Voluptatum recusandae nemo adipisci ipsam, doloremque ab ratione
              officia quis voluptatem temporibus!
            </p>
            <div className="border-t border-blue-500 p-4 flex items justify-end space-x-4 font-bold font-font1">
              <p>ON JAN 17,2024</p>
              <div className="flex items-center justify-center space-x-1">
                <i className="fa-regular fa-comment"></i>
                <p>12</p>
                <i className="fa-regular fa-heart"></i>
                <p>2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
