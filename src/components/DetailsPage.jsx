import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function DetailsPage({ films }) {
  const { id } = useParams();
  
  useEffect(() => {

  }, [])

  return (
    <div>
      details
    </div>
  )
};