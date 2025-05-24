"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "@/components/Loader"
import Countdown from "@/components/Countdown"
import DaysTogether from "@/components/DaysTogether"
import PhotoGallery from "@/components/PhotoGallery"
import Message from "@/components/Message"
import MusicPlayer from "@/components/MusicPlayer" // Uncomment this if you want to add a background song
import FloatingElements from "@/components/FloatingElements"
import TapToReveal from "@/components/TapToReveal"

// Change this to your anniversary date
const ANNIVERSARY_DATE = "2025-05-24T00:00:00"
// Change this to the date you got together
const TOGETHER_DATE = "2021-05-27T00:00:00"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [showTapToReveal, setShowTapToReveal] = useState(false)
  const [playSong, setPlaySong] = useState(false) // Uncomment this if you want to add a background song

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Check if the anniversary date has passed
    const now = new Date()
    const anniversary = new Date(ANNIVERSARY_DATE)
    if (now >= anniversary) {
      setShowContent(true)
      setShowTapToReveal(true)
    }
  }, [])

  const handleCountdownComplete = () => {
    setShowContent(true)
    setShowTapToReveal(true)
  }

  const handleReveal = () => {
    setShowTapToReveal(false)
    setShowContent(true)

    // Uncomment this if you want to add a background song
    setTimeout(() => {
      setPlaySong(true)
    }, 1000);
  }

  // Add your photos here
  const photos = [
    { src: "/image.jpg", alt: "Us together" },
    { src: "/image2.png", alt: "Special moment" },
    { src: "/image.jpg", alt: "Happy times" },
    { src: "/image2.png", alt: "Memories" },
  ]

  // Change this message according to you
  const message = `To My Everything,

In a world full of temporary moments, you are my forever.
You came into my life not just as a friend, but as the soul I never knew I was missing.
Your presence feels like home—warm, safe, and endlessly comforting.

Every laugh we've shared, every silent look, every deep conversation—
they’ve all become pieces of the story I want to tell for the rest of my life.
You’ve turned my ordinary days into something magical,
and every second with you is a memory I hold close.

When I fall, you lift me.
When I’m lost, you guide me.
And when I forget how to love myself, you remind me I’m worth loving.

You’re not just my best friend…
You are my peace, my strength, my inspiration.
The one I trust with my truths, my dreams, and my heart.

I don’t know what I did to deserve someone like you—
but I thank the universe every single day for crossing our paths.
May this bond only grow deeper, stronger, and more beautiful with time.

With all the love I have,
Forever yours,`

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <FloatingElements />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : !showContent ? (
          <motion.div
            key="countdown-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen p-4 relative"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="absolute bottom-1/4 left-1/4 w-20 h-20 text-5xl animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                💝
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              className="text-center mb-12 relative"
            >
              <div className="absolute -top-16 -left-16 w-32 h-32 text-5xl animate-float">🌸</div>
              <div className="absolute -bottom-28 -right-14 w-32 h-32 text-5xl animate-float-delay">🌺</div>

              <h1 className="text-4xl md:text-5xl py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-4 animate-gradient">
                Our FriendShip day is Coming!
              </h1>
              <p className="text-xl text-purple-700 font-medium">The countdown to our special day 🤍</p>
            </motion.div>

            <Countdown targetDate={ANNIVERSARY_DATE} onComplete={handleCountdownComplete} />
          </motion.div>
        ) : showTapToReveal ? (
          <TapToReveal key="tap-to-reveal" onReveal={handleReveal} />) : (
          <>
            {/* Uncomment this if you want to add a background song */}
            <MusicPlayer playSong={playSong} /> 
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="container mx-auto px-4 py-8"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                }}
                className="text-center mb-12 relative"
              >
                <div className="absolute -top-2 -left-5 md:-left-10 text-5xl md:text-6xl animate-float">🎉</div>
                <div className="absolute -bottom-10 -right-5 md:-bottom-14 md:-right-10 text-5xl md:text-6xl animate-float-delay">
                  🎊
                </div>

                <h1 className="text-4xl md:text-6xl py-1 md:py-2 px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-3 animate-gradient">
                  Happy FriendShip!
                </h1>
                <p className="text-xl text-purple-700 font-medium">Every moment with you is a blessing ❤️</p>
              </motion.div>

              <DaysTogether startDate={TOGETHER_DATE} animationDuration={3} />

              <PhotoGallery photos={photos} />

              <Message message={message} />

              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-16 mb-8 text-pink-600"
              >
                
              </motion.footer>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
