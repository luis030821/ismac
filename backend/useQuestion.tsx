import { useMessage } from "cllk";
import React, { useEffect, useState } from "react";

function useQuestion() {
  const [coment, setComent] = useState<{ coment: string }[]>();
  const { messagePromise } = useMessage();
  const addComment = async (data: any) => {
    messagePromise(
      async () => {
        await fetch(
          "https://us-east-1.aws.data.mongodb-api.com/app/template-latkr/endpoint/coment",
          { method: "POST", body: JSON.stringify({ coment: data }) }
        );
        await getComents();
      },
      {
        success: "Datos Guardados",
        error: "Error de comentarios",
        pending: "Guardando comentarios",
      }
    );
  };
  const getComents = async () => {
    const res = await fetch(
      "https://us-east-1.aws.data.mongodb-api.com/app/template-latkr/endpoint/coment"
    );
    setComent(await res.json());
  };
  useEffect(() => {
    getComents();
  }, []);
  return { addComment, coment };
}

export default useQuestion;
