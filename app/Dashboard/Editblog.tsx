import React from 'react'
import { useState } from 'react'
type Blog = {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    reference: string | null;
    createdBy: string;
    credits: string | null;
    createdAt: Date;
    authorId: string | null;
    show: boolean;
}

const Editblog = (para: {blog:Blog}) => {
  return (
    <div>
      
    </div>
  )
}

export default Editblog
