import Slider from "./Slider";

export default function EventsPrev() {
    const slideItems = [
        {
          id: 1,
          title: "Internet of Things India Expo",
          description:
            "Join 1015 participating brands from 36 countries and over 44,000 tech enthusiasts for three days of marveling at the latest innovations at IOT India. ",
          imageurl:
            "https://assets-global.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg",
        },
        {
          id: 2,
          title: "Blockchain Technology",
          description:
            "Harnessing the power of blockchain Redefining security, transparency, and efficiency in transactions worldwide",
          imageurl:
            "https://media.licdn.com/dms/image/D5612AQHknxRVK-oR9A/article-cover_image-shrink_600_2000/0/1695877101109?e=2147483647&v=beta&t=0xQ2EF8clAS5Vwcqy3bbMA6oFU7g6x3srrrAeA6oLH8",
        },
        {
          id: 3,
          title: "Climate Change",
          description:
            "Navigating the climate crisis Urgent actions needed to preserve our planet for future generations.",
          imageurl:
            "https://npr.brightspotcdn.com/dims4/default/046d148/2147483647/strip/true/crop/7680x5120+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F78%2Fdf%2Fa027f12342b1ab320dc808aee3b9%2Fadobestock-568336762.jpeg",
        },
        {
          id: 4,
          title: "Renewable Energy",
          description:
            "Embracing renewable energy Paving the way for a sustainable and cleaner future.",
          imageurl:
            "https://buck.rullout.com/2024/02/Renewable-Energy-Featured-1.jpg",
        },
        {
          id: 5,
          title: "Cybersecurity",
          description:
            "Securing the digital realm: Defending against evolving cyber threats to safeguard data and privacy.",
          imageurl:
            "https://img.etimg.com/thumb/width-1200,height-900,imgsize-38296,resizemode-75,msid-92021261/tech/technology/cert-ins-directives-on-reporting-cybersecurity-incident-lacks-clarity-software-policy-group-bsa.jpg",
        },
        {
          id: 6,
          title: "Virtual Reality (VR)",
          description:
            "mmersive experiences in the digital age: Opening new frontiers with virtual reality technology",
          imageurl:
            "https://www.analyticsinsight.net/wp-content/uploads/2021/11/Virtual-reality.jpg",
        }
      ];
  return (
    <>
    <Slider slideItems={slideItems} title="Latest Events" path="/articlepage" id="2"/>
    </>
  )
}

