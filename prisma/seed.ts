// npm run seed - add events and posts to the db. Make sure you sign in with tudar@nmamit.in mail id first. Then use the id of that user account as the authorId for all the posts.

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const eventData = [
    {
      "id": "clrk6cjxy0000ftw1dbpgwmql",
      "title": "Tulu Lipi Kalpuga",
      "imageUrl": "http://res.cloudinary.com/deax1ssmv/image/upload/v1705640554/zfhjjojvk7ngbfgcsskf.jpg",
      "description": "\"Tulu Lipi Kalpuga\" was an educational event organized by Tudar, the Tulu club of NMAM Institute of Technology, in collaboration with Tulu Cultural Research Foundation. The workshop, held on September 30, 2023, aimed to teach and create awareness about Tulu lipi, the script for the Tulu language. The event included an inaugural session with Mr. Mahi Mulki as the Chief Guest, who emphasized the importance of learning Tulu script. The workshop, conducted by Mr. Nischith and Mr. Prithvi, successfully taught over 40 participants the basics of Tulu lipi, receiving overwhelming response and appreciation. The event concluded with a vote of thanks and appreciation to the organizers, Tulu Cultural Research Foundation, faculty coordinator, and NMAM Institute of Technology for the opportunity.",
      "date": "Sep 30, 2023",
      "attendedBy": null,
      "organizedBy": "Tudar Club Of NMAMIT",
      "venue": "LC11 (Sir CV Raman Block)"
    },
    {
      "id": "clrk6zmlc0001ftw1ge4w435n",
      "title": "Tulu Lipi day",
      "imageUrl": "http://res.cloudinary.com/deax1ssmv/image/upload/v1705641631/aqns6yg6hxcvwz1irp1h.jpg",
      "description": "On October 10, 2023, Tudar club at NMAM Institute of Technology celebrated Tulu Lipi Day in honor of Dr. Venkataraja Punichithaya, a significant contributor to Tulu language. The celebration included presenting Tulu script boards and materials to the principal, vice-principal, and other dignitaries. The event was appreciated by the institute's leadership and key figures, reinforcing awareness about Tulu Lipi and culture on campus. Tudar expressed gratitude to their Faculty Coordinator, Mrs. Sudeeksha Pai, and NMAM Institute of Technology for the opportunity to celebrate and showcase their interest.",
      "date": "Oct 10, 2023",
      "attendedBy": null,
      "organizedBy": "Tudar Club Of NMAMIT",
      "venue": "NMAMIT"
    },
    {
      "id": "clrk8abj40003ftw1vhl2jv9c",
      "title": "Tulu Song",
      "imageUrl": "http://res.cloudinary.com/deax1ssmv/image/upload/v1705643809/oc2znxtxstltjkj4dxfd.png",
      "description": "Tudar, in collaboration with the Stereo Club of NMAM Institute of Technology, embarked on a project to recreate old Tulu songs. The primary goal was to revive and reintroduce forgotten Tulu hits. The Stereo Club played a crucial role, actively participating and supporting Tudar throughout the process. The talented singers from Stereo Club, including Rohith J Kamath, K Eshaan Rao, Shreyas Upadhyaya, and Keshav Nayak, showcased their vocal skills during recording sessions held at the 'Ninada' studio of NMAMIT. The recreated songs were released after the 'Tudara Siri' celebration. Tudar expressed gratitude to the institution for providing the necessary facilities and thanked all members of Tudar and Stereo Club for their contributions to this musical journey.",
      "date": "Oct 19, 2023",
      "attendedBy": null,
      "organizedBy": "Tudar, in collaboration with the Stereo Club",
      "venue": "Ninada"
    },
    {
      "id": "clrk8i5kv0004ftw1fmiu5h2z",
      "title": "Short movie",
      "imageUrl": "http://res.cloudinary.com/deax1ssmv/image/upload/v1705644174/g3hmay5uipfswy7afb7p.png",
      "description": "Tudar, NMAM Institute of Technology's Tulu club, effectively utilized social media to promote Tulunad's beliefs, traditions, and culture. They released engaging Instagram reels on topics like Aati kalinje and freedom fighters of Tulunad, earning widespread appreciation. Special videos on Dr. Venkataraja Punichithaya and Pilinalike were released to commemorate Tulu Lipi Day and share the history of the tradition. Social media proved to be a powerful platform for Tudar, reaching the public and creating awareness. They thanked their media team, NMAMIT, and the audience for their support and access to facilities like the 'Ninada' recording studio during this creative journey.",
      "date": "Oct 10, 2023",
      "attendedBy": null,
      "organizedBy": "Tudar Club",
      "venue": "Ninada"
    },
    {
      "id": "clrk9zn780005ftw119a49trh",
      "title": "Rang - an art competition",
      "imageUrl": "http://res.cloudinary.com/deax1ssmv/image/upload/v1705646670/x4ynardayb2wmhrmngik.png",
      "description": "Tudar in collaboration with Rachana club organized Rang – an art competition. The main theme of the competition was Tulunad where the participants were expected to bring out the beauty and culture of Tulunad through paintings, sketches and pastel drawings. Students of NMAM Institute of Technology participated in this competition in large numbers and great spirit. We received a total of 24 artworks by the participants, each filled with immense beauty and skill by 30th November 2023. The winner and the runner-up were decided based on the decisions of the judges. Paintings and sketches of ‘Daivas’ was strictly prohibited in this competition. A total prize pool of Rs.2500/- was allotted for the winner and the runner. The prizes were distributed during our annual celebration of ‘Tudara Siri’ by the chief guest.",
      "date": "Nov 24, 2023",
      "attendedBy": null,
      "organizedBy": "Tudar in collaboration with Rachana club",
      "venue": "NMAMIT"
    },
    {
      "id": "cluw6v7o6000schmv1eozcssw",
      "title": "testing",
      "imageUrl": "http://res.cloudinary.com/deax1ssmv/image/upload/v1712897366/a5noumjymx2xqlprvatp.png",
      "description": "this is a test",
      "date": "Apr 24, 2024",
      "attendedBy": null,
      "organizedBy": "tester",
      "venue": "test"
    }
  ];
  
const postData = [
  {
    "id": "clrkyrpgw0001h68ppk274je3",
    "title": "Kambala",
    "content": "ನರಮನಿ ಪುರುಬಾಲೆ ಉಪ್ಪುನಗನೇ ಗೊಬ್ಬರೆ ಸುರು ಮಲ್ಪುವೆ. ಪ್ರಾಯ ಪೋದ್ ಕೈಕಾರ್ ಸರಿಯಾದ್ ಪಂದುನೇಟ ಕಣ್ಣ್ ತೋಜುನೇಟಲಾ ಒಂಜತ್ತಂಡ ಒಂಜಿ ಗೊಬ್ಬು ಗೊಬ್ಬರೆ ಅತ್ತಂದಾಂಡ ತೂದ್ ಕುಸಿ ಪಡೆಯರೆ ಆಸೆ ಪಡೆಪೆ. ಇಂಚಾದ್ ಗೊಬ್ಬು ನರಮಾನ್ಯನ ಬದ್ಕ್ ಡ್ ಒಂಜಿ ಬಾಗೊ. ನಮ್ಮ ಪರತಿರಿರ್ದ್ ನಡತಿ ಬತ್ತಿ ಗೊಬ್ಬುಲೆನ್ ಪರಪೋಕು ಗೊಬ್ಬುಲು ಅತ್ತಂಡ ಜನಪದ ಗೊಬ್ಬುಲು ಪನ್ಪೆರ್. ಅಂಚಿನ ಗೊಬ್ಬುಲೆಡ್ ಕಂಬಳಲ ಬಾರಿ ಪುಗರ್ತೆ ಪಡೆಯಿನವು. \nಕಂಬಳ ಪನ್ಪಿನವು ತುಲುನಾಡ್ ದ ಒಂಜಿ ಜಾನಪದ ಗೊಬ್ಬು. ದಷ್ಟಪುಷ್ಟವಾದ್ ಸಾಂಕಿನ ಎರ್ಲೆನ್ ಅಡೆತಿನ ಕಂಡೊಡ್ ಬಲಿಪಾವುನ ಗೊಬ್ಬೆ ಕಂಬಳ. ದಕ್ಷಿಣ ಕನ್ನಡ ಬೊಕ್ಕ ಉಡುಪಿ ಜಿಲ್ಲೆದ ಜನಕುಲೆನ ಬದ್ಕುದ ಒಟ್ಟಿಗೆ ನಿಕಟ ಸಂಬಂದೊ ಉಪ್ಪುನ ಗೊಬ್ಬು ಪಂಡ ಅವ್ವು ಕಂಬಳ. ಕರಾವಳಿ ಕೃಷಿಕೆರ್ ಕೆಯಿ ಕೊನೆರ್ದ್ ಬೊಕ್ಕ ಆಕ್ಲೆನ ಮನರಂಜನೆಗೋಸ್ಕರ ಈ ಗೊಬ್ಬುನ್ ಮಲ್ತೊಂದಿತ್ತೆರ್. ಒಂಜೇ ಲೆಕೊಂದಿನ ರಡ್ಡ್ ಎರ್ಲೆಗ್ ನೊಗ ಕಟ್ಟುದ್ ಐನ್ ಕಂಡೊಡ್ ಬಲಿಪಾವೆರ್. ಎರ್ಲೆನೊಟ್ಟಿಗೆ ಬಲಿಪುನಾಯೆಗ್ಲ ಮೂಲು ಮಲ್ಲ ಪ್ರಾಮುಖ್ಯತೆ ಉಂಡು.\n\nಕಂಬಳಗ್ ನೂದು ವರ್ಷದ ಇತಿಹಾಸ ಉಂಡು. ದುಂಬುದ ಕಾಲೊಡ್ ರಾಜೆರ್ ಬಲಟ್ಟ್ ಬೊಕ್ಕ ಪ್ರೋತ್ಸಾಹಡ್ದ್ ಈ ಕಂಬಳ ನಡೆತೊಂದಿತ್ತಂಡ್. ದಕ್ಷಿಣ ಕನ್ನಡ ಜಿಲ್ಲೆಡ್ ಕೃಷಿಕ್ ಬೋಡಾದ್ ಎರ್ಲೆನ್ ಸಾಕೊಂದಿತ್ತೆರ್. ಆಂಡಲಾ ಐಟ್ ಬಲಿಷ್ಠವಾಯಿನ ಎರ್ಲೆದ ಮಧ್ಯೆ ಕಂಬಳ ಸ್ಪರ್ಧೆ ಮಲ್ತೊಂದಿತ್ತೆರ್. ಇಂಚಾದ್ ಕೃಷಿ ಬೊಕ್ಕ ಗೊಬ್ಬುಗ್ ತುಳುವೆರ್ ಮನ್ನಣೆ ಕೊರೊಂದಿತ್ತೆರ್. ಐನೊಟ್ಟಿಗೇ ಎರ್ಲೆನ್ ಬಾರಿ ಎಡ್ಡೆಡ್ ಸಾಂಕ್ಯೆರೆ ಅವು ಒಂಜಿ ಕಾರಣಲಾ ಆದಿತ್ತಂಡ್. ಚಳಿಗಾಲೊಡ್ದ ಬೊಕ್ಕ ಸುರುವಾಪುನ ಈ ಗೊಬ್ಬು ಅರೆಗಾಲದ ದೊಂಬು ಏರುನೆಕ್ ದುಂಬು, ಪಂಡ ಫೆಬ್ರುವರಿ – ಮಾರ್ಚ್ ದ ದುಂಬು ಮನ್ಪುವೆರ್.ಉಂದು ಕೃಷಿಕೆರೆಗ್ ಮಸ್ತ್ ಮನರಂಜನೆ ಬೊಕ್ಕ ಕುಸಿ ಕೊರ್ಪುಂಡು. \n‘ಕಂಪ’ ಪನ್ಪಿನ ಪದಕ್ಕ್ ಕೆಸರ್ ಪನ್ಪಿನ ಅರ್ಥ ಉಂಡು. ‘ಕಳ’ ಪನ್ಪಿನ ವೇದಿಕೆ, ಕಣ ಪನ್ಪಿನ ಅರ್ಥ ಉಂಡು. ಅಂಚಾದ್ ಅವ್ವು ಕಂಪದ ಕಳ (ಕೆಸರ್ ದ ಕಳ) ಆಂಡ್ ಪನ್ದ್ ಪನ್ಪೆರ್. ",
    "imageUrl": "http://res.cloudinary.com/deax1ssmv/image/upload/v1705688290/ahzus9nneq56zcxwauiw.webp",
    "reference": "",
    "createdBy": "Gagan Rai",
    "credits": "",
    "createdAt": new Date("2024-01-19 18:18:12.273"),
    // "authorId": "clrglga4w000714mjtcgp74w5",
    "authorId": "cm1598tjn0005u5sx4cg18wdn",
    "show": true
  },
  {
    "id": "clrkyyswz0002h68p4ivpo1vi",
    "title": "Tulu Movies",
    "content": "ತುಳು ಚಿತ್ರೋದ್ಯಮನ್ ‘ಕೋಸ್ಟಲ್ ವುಡ್’ ಪಂದ್ ಲಾ ಲೆಪ್ಪುವೆರ್. 1971ಡ್ ‘ಎನ್ನ ತಂಗಡಿ’ ಪನ್ಪಿನ ಸುರೂತ ತುಳು ಚಿತ್ರ ಬಿಡುಗಡೆ ಆಂಡ್. ತುಳು ಚಿತ್ರೋದ್ಯಮಡ್ ವರ್ಷಗ್ ಐನೆರ್ದ್ ಏಳ್ ಚಿತ್ರ ಬಿಡುಗಡೆ ಮಲ್ಪುವೆರ್. ತುಳು ಭಾಷೆಡ್ ಎಲ್ಯ ಮಟ್ಟದ ಸಿನೆಮಾಲ ಉಂಡು. \n2006 ನೇ ಇಸವಿಗ್ ತುಳು ಸಿನೆಮಾಗ್ 25 ವರ್ಷ ಆಂಡ್.ತುಳು ಚಿತ್ರೊಲೆಡ್ ‘ಕೋಟಿ ಚೆನ್ನಯ್ಯ’ ಚಿತ್ರ ಜಿಂಜ ಪುದರ್ ಪ್ರೋತಿನ ಚಿತ್ರ. ಐಟ್ ‘ಕೆಮ್ಮಲೆತ ಬ್ರಹ್ಮ’ ಬೊಕ್ಕ ‘ಎಕ್ಕಸಕ್ಕ’ ಗೀತೆಲ್ ಜನಪ್ರಿಯ ಆದಿತ್ತುಂಡ್. ಅಂಚನೆ ‘ಪಗೆತ್ತ ಪುಗೆ, ಬಿಸತ್ತಿ ಬಾಬು, ತುಡರ್, ಬದ್ಕುದ ಬೆಲೆ, ಕಾಸ್ದಾಯೆ ಕಂಡನಿ, ಏರ್ ಮಲ್ತಿನ ತಪ್ಪು’ ಉಂದು ಪೂರಾ ಉಲ್ಲೇಖ ಮಲ್ಪುನ ಅಂಚಿತ್ತಿನ ಚಿತ್ರೊಲು. ಕೆ. ಎನ್. ಟೇಲರ್ ಮೇರ್ ತುಳು ಚಿತ್ರರಂಗದ ಮಲ್ಲ ನಿರ್ಮಾಪಕೆರ್. ಆರ್ ಮಲ್ತಿನ ಚಿತ್ರೊಲೆನ್ ಜನಕುಲು ಇತ್ತೆಲಾ ನೆನೆಪುವೆರ್.‘ಬಂಗಾರ್ ಪಟ್ಲೆರ್’ ಉಂದು 60ದ ದಶಕಡ್ ಬತ್ತಿನ ಚಲನಚಿತ್ರ. ನೆಕ್ಕ್ ರಾಷ್ಟ್ರೀಯ ಪುರಸ್ಕಾರಲ ತಿಕ್ಕುದಿತ್ತುಂಡ್. ನೆಟ್ಟ್ ಕನ್ನಡದ ನಟಿ ಸುಧಾರಾಣಿ ಪಾತ್ರ ಮಲ್ತಿತ್ತೆರ್.‘ಕಡಲ ಮಗೆ’ 2006ಡ್ ಬಿಡುಗಡೆ ಆಯಿನ ಚಿತ್ರ. ಕುಡ್ಲಡ್ 100 ದಿನ ಬಲಿತಿನ ಈ ಚಿತ್ರೊಡು ಕನ್ನಡದ ನಾಯಕೆ ದಿಗಂತ್ ಪಾತ್ರ ಮಲ್ತಿತ್ತೆರ್. ಇಂಚದ ‘ಸುದ್ಧ’ ಪನ್ಪಿನ ತುಳು ಚಿತ್ರ ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಟ್ಟಡ್ ಪುದರ್ ಮಲ್ತುಂಡ್. \n2022ಡ್ ‘ಜೀಟಿಗೆ’ ಪನ್ಪಿನ ತುಳು ಚಿತ್ರೊಗ್ ರಾಷ್ಟ್ರೀಯ ತುಳು ಚಲನಚಿತ್ರ ಪ್ರಶಸ್ತಿಲಾ ತಿಕ್ಕುದುಂಡ್. ತುಳು ಚಿತ್ರರಂಗಡ್ ಹಿಂದಿದ ನಟೆರಾಯಿನ ಜಾನಿ ಲೇವರ್ ಬೊಕ್ಕ ಕನ್ನಡ ಚಿತ್ರರಂಗದ ಅನಂತ ನಾಗ್, ಅಚ್ಯತ ಕುಮಾರ್, ದಿಗಂತ್, ವಿಜಯ ರಾಘವೇಂದ್ರ ಮೊಕುಲು ಮಾತಾ ಅಭಿನಯ ಮಲ್ದೆರ್. ಅಂಚೆನೆ ದಿ. ಪುನೀತ್ ರಾಜಕುಮಾರ್ ಲ ‘ಉಮಿಲ್’ ಪನ್ಪಿನ ಚಿತ್ರೊಡ್ ಪದ್ಯ ಪಂತೆರ್",
    "imageUrl": "http://res.cloudinary.com/deax1ssmv/image/upload/v1705688622/c1gyezb1so15owuub57s.webp",
    "reference": "",
    "createdBy": "Sampreeth Poojary",
    "credits": "",
    "createdAt": new Date("2024-01-19 18:23:43.331"),
    "authorId": "cm1598tjn0005u5sx4cg18wdn",
    "show": false
  },
  {
    "id": "clrkz1vfj0003h68pdop65alk",
    "title": "Yakshagana",
    "content": "ಯಕ್ಷಗಾನ ಪನ್ಪಿನ ಒಂಜಿ ದೇವೆರೆನ ಕಲೆ. ಈ ಕಲೆನ್ ದಕ್ಷಿಣ ಕನ್ನಡ, ಉಡುಪಿ, ಉತ್ತರ ಕನ್ನಡ ಶಿವಮೊಗ್ಗಡ್ ತೂವರೆಗ್ ತಿಕ್ಕುನ ಜಾಸ್ತಿ. ಈ ಕಲೆನ್ ನಮ ಪೂರೊ ತುಳುಟ್ ‘ಆಟ’ ಪಂದ್ ಪನ್ಪ. ನಮ್ಮ ತುಳುನಾಡುಡ್ ಮಸ್ತ್ ಜನ ಪ್ರಸಿದ್ಧ ಯಕ್ಷಗಾನ ಕಲಾವಿದೆರ್ ಲ ಉಲ್ಲೆರ್. ಯಕ್ಷಗಾನ ಪನ್ಪಿನ ಕಾಲಿ ಒಂಜಿ ನಲಿಕೆ ಅತ್ತ್, ಅವ್ವು ದೇವೆರೆನ ಕಲೆ. ಐಕೆ ಕೆಲವೆರ್ ಉಂದೆನ್ ಪರಕೆ ಪಂತ್ ಲ ಮನ್ಪಾವೆರ್. ಯಕ್ಷಗಾನಡ್ ಕಾಲಿ ನಲಿಪುನ ಮಾತ್ರ ಗೊತ್ತಿತ್ತುಂಡ ಯಾವುಜ್ಜಿ. ಐತ ಒಟ್ಟಿಗೆ ಸಂಗೀತ, ಪಾತೆರ, ಬಣ್ಣ ಪತ್ತಾವುನು, ಮಾಂತೆತ್ತಲ ವಿಷಯ ಗೊತ್ತುಪ್ಪೊಡು. ಯಕ್ಷಗಾನಡ್ ಮುಖ್ಯವಾದ್ ರಡ್ಡ್ ವಿಧಕುಲು ಉಲ್ಲ. ತೆಂಕುತಿಟ್ಟು ಲ, ಬಡಗುತಿಟ್ಟು ಲ. ಯಕ್ಷಗಾನ ಏಪಲ ಕಟ್ಲೆಗೆ ಸುರು ಆದ್ ಇಡೀ ಕಟ್ಲೆಡ್ ಪುಲ್ಯ ಕಾಂಡೆ ಮುಟಗ್ ನಡಪುಂಡು. ಯಕ್ಷಗಾನಡ್ ರಾಮಾಯಣ, ಮಹಾಭಾರತ ನೆಟ್ಟ್ ಪೂರ ಕಥೆಲೆನ್ಲ ಬಾರಿ ಎಡ್ಡೆಡ್ ತೋಜಾವೆರ್. ದೇವಿ ಮಹಾಯ್ಮೆ ಪನ್ಪಿನ ಯಕ್ಷಗಾನದ ಬಾರಿ ಪೊರ್ಲುದ ಒಂಜಿ ಆಟ. ಉಂದೆನ್ ತುವರೆಗ್ ಊರೂರ್ದ್ ಜನಕುಲು ಬರ್ಪೆರ್. ಅಂಚೆನೆ, ನಮನ ತುಳುನಾಡುಡ್ ಕೆಲವು ಪ್ರಸಿದ್ಧ ಮೇಳಲ ಉಲ್ಲ. ಕಮಲಶಿಲೆ, ಸಾಲಿಗ್ರಾಮ, ಮಕ್ಕಳ, ಧರ್ಮಸ್ಥಳ, ಕಟೀಲ್, ಪೆರ್ದೂರ್, ಮಂದರ್ತಿ, ನರನಕಟ್ಟೆ ಮೊಕುಲು ಪೂರ ತುಳುನಾಡುಡ್ ಸಾವಿರ ಸಾವಿರ ಆಟ ಪ್ರದರ್ಶನ ಮಂತಿನಕುಲ್. ಈತ್ ಆಳ ಇಪ್ಪುನ ಕಲೆತ ಬಗ್ಗೆ ನಮನ ತುಳುನಾಡುಡ್ ಪ್ರತಿಯೊರಿಯೆಗ್ಲಾ ಗೊತ್ತುಪ್ಪೊಡು ಪನ್ಪಿನ ಆಸೆ ಎನ್ನ.",
    "imageUrl": "http://res.cloudinary.com/deax1ssmv/image/upload/v1705688765/ugp9gi2im40axmrnvgna.jpg",
    "reference": "",
    "createdBy": "Prathama S J",
    "credits": "",
    "createdAt": new Date("2024-01-19 18:26:06.56"),
    "authorId": "cm1598tjn0005u5sx4cg18wdn",
    "show": true
  }
];


async function main() {
  await prisma.events.createMany({
    data: eventData,
    skipDuplicates: true
  });
  console.log('Events addes succesfully!')
  await prisma.post.createMany({
    data: postData,
    skipDuplicates: true // Prevent duplicates if already inserted
  });
  console.log('Posts added successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
