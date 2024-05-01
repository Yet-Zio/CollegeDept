import { useEffect, useState } from "react";
import Grid from "../shared/Grid.jsx";
import Pagination from "../shared/Pagination.jsx";
import axios from "axios";
import Pako from "pako";

export default function ArticleBody() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/associate/getAllArticle");
        setResponse(res.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchAllArticles();
  }, []); // Run once when component mounts

  async function decompressData(compressedBase64) {
    try {
      const compressedData = atob(compressedBase64);
      const compressedUint8Array = new Uint8Array(
        compressedData.split('').map((char) => char.charCodeAt(0))
      );
      const decompressedData = Pako.inflate(compressedUint8Array);
      const originalData = new TextDecoder().decode(decompressedData);
      return originalData;
    } catch (error) {
      console.error('Error decompressing data:', error);
      return null;
    }
  }

  async function extractImages(decompressedBody) {
    const imgRegex = /<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>/g;
    const matches = decompressedBody.match(imgRegex);
  
    if (!matches) {
      return [];
    }
  
    const imageUrls = matches.map(match => {
      const srcMatch = /src\s*=\s*['"]([^'"]+)['"]/i.exec(match);
      return srcMatch ? srcMatch[1] : null;
    }).filter(Boolean);
  
    return imageUrls;
  }

  async function convertItem(item) {
    const decompressedBody = await decompressData(item.body);
    const imageUrls = await extractImages(decompressedBody);
    
    return { 
      firstName: item.firstName,
      lastName: item.lastName, 
      profileUrl: item.profileUrl,
      title: item.title.toUpperCase(),
      imageurl: imageUrls,
      description: decompressedBody,
      date: item.date
     
    };
  }

  const convertedItems = response.map(item => convertItem(item));

  return (
    <>
      <div className="mt-16"></div>
      <Pagination PageCount={Math.ceil(convertedItems.length / 20)} top={1} />
      <Grid ContentItem={convertedItems}/>
      <Pagination PageCount={Math.ceil(convertedItems.length / 20 * 20)} />
    </>
  );
}
