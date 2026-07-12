import React from 'react'
import ExperienceContent from '@/components/ExperienceContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://rohama-majeed.dev"),

  title: {
    default: "Rohama Majeed | Experience",
    template: "",
  },
}
const ExperiencePage = () => {
  return (
    <ExperienceContent/>
  )
}

export default ExperiencePage