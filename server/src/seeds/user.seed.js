import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "emgai230914@gmail.com",
    fullName: "Em gái",
    password: "123456",
    avatar:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/476447289_1160593265684023_1486530832787966297_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Nm0KFfugHbQQ7kNvgGK-h2Y&_nc_oc=AdiHpzvwf02xH_xrxb34mWCu2Oz2SpualsLlvAECB2oxdS2z7KeuX4iUqm4jtlrXNr0&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=ASXa5sp1gfQovC4QwlZU6qq&oh=00_AYEujq1X8dzd9DMIt3Q0c9bJ7hwVpOpcoIn7NbQMTSDLIQ&oe=67D37193",
  },
  {
    email: "emdau2506@gmail.com",
    fullName: "Dâu iu",
    password: "123456",
    avatar:
      "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/454826874_2030834130665144_8702463598260505331_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=2rLo8iDFd4IQ7kNvgHvNU_9&_nc_oc=AdgNLdeyBTcpjRqZsG0b6cNZFm0HRJ1H8_khegUGEwdd512Rf22ek0Os1Vi1PIlRyPc&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fdad3-5.fna&_nc_gid=AICxH8QNALm3JV2kjX0BqLR&oh=00_AYEXzARq3BuEui6Zf8Jgjao0oyZzaaGmwQ-ZiNnU5o0x9A&oe=67D39114",
  },
  {
    email: "me050779@gmail.com.com",
    fullName: "Mẹ",
    password: "123456",
    avatar:
      "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/427931483_930974175312601_9167107057856856605_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=JgCZRWy3GMUQ7kNvgHjGUBs&_nc_oc=AdgwxNW6hG6Yfl-xWn8PFIsjTRrBC8Yo1gPqFlAmgwoad8Tuss-VvDLC6PuBTbEOAwk&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fdad3-4.fna&_nc_gid=AMIj3fmCmveglYRwYJzXUB4&oh=00_AYGUmGywXX-f5S1CbKK_4MsneHxPUFgEdmkz-E2AA6APfQ&oe=67D35E56",
  },
  {
    email: "emtrai190708@gmail.com",
    fullName: "Em trai",
    password: "123456",
    avatar:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/474217404_1128559652294159_868288605122539344_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=RiIKqlrwZ-UQ7kNvgF1aX6f&_nc_oc=AdjPOB9LzmL7N88Ffgx3pjQYGlsbVKCFtauPbSi23z24b5-YvIBvB3ftq_TavYNcdu4&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AMIj3fmCmveglYRwYJzXUB4&oh=00_AYF0-jgNIHV7EHp8NRvd9trhndVO9y1fxU8KwdN3ru5a4g&oe=67D35A6D",
  },
  {
    email: "ba011176@gmail.com",
    fullName: "Ba",
    password: "123456",
    avatar:
      "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/451510829_122096316446395093_3652177870234889105_n.jpg?stp=dst-jpg_p200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=-_DIPNNfk08Q7kNvgEdZO6R&_nc_oc=AdhE5OZIFOtIdBJSnyKHl2-UpqGgjlxKdGFli4aV8_wQXj6iRlJrao1PT8Zkrpl2oOU&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.fdad3-4.fna&_nc_gid=A1X3Hbe8ovYmFoK3_HGR4sH&oh=00_AYFqd6nxezTpvLNkRZUo-LPd0hwl4SI4npS4VEkO0uObug&oe=67D35AF4",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
