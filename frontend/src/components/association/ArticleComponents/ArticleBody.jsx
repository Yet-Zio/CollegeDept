import Grid from "../shared/Grid.jsx";
import Pagination from "../shared/Pagination.jsx";
export default function ArticleBody() {
//   const MAX_DESCRIPTION_LENGTH = 90;

  

  const ContentItem = []
  //   {
  //     id: 1,
  //     title: "Artificial intelligence (AI) ",
  //     description:
  //       "Unlocking the potential of AI Empowering machines to revolutionize industries, enrich lives, and shape the future of humanity.",
  //     imageurl:
  //       "https://assets-global.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Blockchain Technology",
  //     description:
  //       "Harnessing the power of blockchain Redefining security, transparency, and efficiency in transactions worldwide",
  //     imageurl:
  //       "https://media.licdn.com/dms/image/D5612AQHknxRVK-oR9A/article-cover_image-shrink_600_2000/0/1695877101109?e=2147483647&v=beta&t=0xQ2EF8clAS5Vwcqy3bbMA6oFU7g6x3srrrAeA6oLH8",
  //   },
  //   {
  //     id: 3,
  //     title: "Climate Change",
  //     description:
  //       "Navigating the climate crisis Urgent actions needed to preserve our planet for future generations.",
  //     imageurl:
  //       "https://npr.brightspotcdn.com/dims4/default/046d148/2147483647/strip/true/crop/7680x5120+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F78%2Fdf%2Fa027f12342b1ab320dc808aee3b9%2Fadobestock-568336762.jpeg",
  //   },
  //   {
  //     id: 4,
  //     title: "Renewable Energy",
  //     description:
  //       "Embracing renewable energy Paving the way for a sustainable and cleaner future.",
  //     imageurl:
  //       "https://buck.rullout.com/2024/02/Renewable-Energy-Featured-1.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Cybersecurity",
  //     description:
  //       "Securing the digital realm: Defending against evolving cyber threats to safeguard data and privacy.",
  //     imageurl:
  //       "https://img.etimg.com/thumb/width-1200,height-900,imgsize-38296,resizemode-75,msid-92021261/tech/technology/cert-ins-directives-on-reporting-cybersecurity-incident-lacks-clarity-software-policy-group-bsa.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "Virtual Reality (VR)",
  //     description:
  //       "mmersive experiences in the digital age: Opening new frontiers with virtual reality technology",
  //     imageurl:
  //       "https://www.analyticsinsight.net/wp-content/uploads/2021/11/Virtual-reality.jpg",
  //   },
  //   {
  //     id: 7,
  //     title: "5G Technology",
  //     description:
  //       "Revolutionizing connectivity Unleashing the potential of 5G for faster, more reliable communication",
  //     imageurl:
  //       "https://stl.tech/wp-content/uploads/2020/11/shutterstock_1014919753.jpg",
  //   },
  //   {
  //     id: 8,
  //     title: "Medical Breakthroughs",
  //     description:
  //       "Innovations in healthcare Transforming lives through groundbreaking medical discoveries and treatments.",
  //     imageurl:
  //       "https://imageio.forbes.com/specials-images/imageserve/5dbb4182d85e3000078fddae/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
  //   },
  //   {
  //     id: 9,
  //     title: "Artificial Intelligence in Healthcare",
  //     description:
  //       "Empowering healthcare with AI Enhancing diagnosis, treatment, and patient care through intelligent technologies",
  //     imageurl:
  //       "https://www.mobihealthnews.com/sites/default/files/Doctor%20using%20hologram%2C%20virtual%20screen_Mobi%20-%20Getty_MR.Cole_Photographer_compressed.jpg",
  //   },
  //   {
  //     id: 10,
  //     title: "Augmented Reality (AR)",
  //     description:
  //       "Blurring the lines between reality and imagination: Augmented reality shaping the way we interact with the world around us",
  //     imageurl:
  //       "https://rockpaperreality.com/wp-content/uploads/AR-in-Travel-and-Tourism.jpg",
  //   },
  //   {
  //       id:11,
  //       title: "Artificial intelligence (AI) ",
  //       description:
  //         "Unlocking the potential of AI Empowering machines to revolutionize industries, enrich lives, and shape the future of humanity.",
  //       imageurl:
  //         "https://assets-global.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg",
  //     },
  //     {
  //       id: 12,
  //       title: "Blockchain Technology",
  //       description:
  //         "Harnessing the power of blockchain Redefining security, transparency, and efficiency in transactions worldwide",
  //       imageurl:
  //         "https://media.licdn.com/dms/image/D5612AQHknxRVK-oR9A/article-cover_image-shrink_600_2000/0/1695877101109?e=2147483647&v=beta&t=0xQ2EF8clAS5Vwcqy3bbMA6oFU7g6x3srrrAeA6oLH8",
  //     },
  //     {
  //       id: 13,
  //       title: "Climate Change",
  //       description:
  //         "Navigating the climate crisis Urgent actions needed to preserve our planet for future generations.",
  //       imageurl:
  //         "https://npr.brightspotcdn.com/dims4/default/046d148/2147483647/strip/true/crop/7680x5120+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F78%2Fdf%2Fa027f12342b1ab320dc808aee3b9%2Fadobestock-568336762.jpeg",
  //     },
  //     {
  //       id: 14,
  //       title: "Renewable Energy",
  //       description:
  //         "Embracing renewable energy Paving the way for a sustainable and cleaner future.",
  //       imageurl:
  //         "https://buck.rullout.com/2024/02/Renewable-Energy-Featured-1.jpg",
  //     },
  //     {
  //       id: 15,
  //       title: "Cybersecurity",
  //       description:
  //         "Securing the digital realm: Defending against evolving cyber threats to safeguard data and privacy.",
  //       imageurl:
  //         "https://img.etimg.com/thumb/width-1200,height-900,imgsize-38296,resizemode-75,msid-92021261/tech/technology/cert-ins-directives-on-reporting-cybersecurity-incident-lacks-clarity-software-policy-group-bsa.jpg",
  //     },
  //     {
  //       id: 16,
  //       title: "Virtual Reality (VR)",
  //       description:
  //         "mmersive experiences in the digital age: Opening new frontiers with virtual reality technology",
  //       imageurl:
  //         "https://www.analyticsinsight.net/wp-content/uploads/2021/11/Virtual-reality.jpg",
  //     },
  //     {
  //       id: 17,
  //       title: "5G Technology",
  //       description:
  //         "Revolutionizing connectivity Unleashing the potential of 5G for faster, more PaginationBottomries and treatments.",
  //       imageurl:
  //         "https://imageio.forbes.com/specials-images/imageserve/5dbb4182d85e3000078fddae/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
  //     },
  //     {
  //       id: 19,
  //       title: "Artificial Intelligence in Healthcare",
  //       description:
  //         "Empowering healthcare with AI Enhancing diagnosis, treatment, and patient care through intelligent technologies",
  //       imageurl:
  //         "https://www.mobihealthnews.com/sites/default/files/Doctor%20using%20hologram%2C%20virtual%20screen_Mobi%20-%20Getty_MR.Cole_Photographer_compressed.jpg",
  //     },
  //     {
  //       id: 20,
  //       title: "Augmented Reality (AR)",
  //       description:
  //         "Blurring the lines between reality and imagination: Augmented reality shaping the way we interact with the world around us",
  //       imageurl:
  //         "https://rockpaperreality.com/wp-content/uploads/AR-in-Travel-and-Tourism.jpg",
  //     }
  // ];
  
  return (
    <>
    <div className="mt-16"></div>
      <Pagination PageCount={Math.ceil(ContentItem.length / 20)} top={1} />
      <Grid ContentItem={ContentItem} />
      <Pagination PageCount={Math.ceil(ContentItem.length / 20*20)} />
    </>
  );
}
