import { useState, useEffect } from "react";
const api = "dummy.json";

// カスタムフック
// use**で始める
export const useGetArticle = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(api, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setList(data));
  }, []);

  return list;
}