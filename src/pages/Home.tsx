import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactCountryFlag from 'react-country-flag'

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showSurprise, setShowSurprise] = useState(false)

  // Imágenes de fondo esparcidas
  const backgroundImages = [
    { src: "/luke_durmiendo.jpg", top: "25%", left: "15%", rotate: -15 },
    { src: "/luke_tocando_camara.jpg", top: "65%", left: "80%", rotate: 12 },
    { src: "/marc_peluca.jpg", top: "35%", left: "75%", rotate: -8 },
    { src: "/sofi_coche.jpg", top: "55%", left: "10%", rotate: 18 },
    { src: "/sofi_marc.jpg", top: "45%", left: "85%", rotate: -12 },
    { src: "/sofi_prueba_superada.jpg", top: "70%", left: "20%", rotate: 15 },
  ]

  const steps = [
    {
      title: "Hey Sofiki",
      subtitle: "Preparada?",
      content: "Este año mi regalo viene envuelto en algunas líneas de código",
      emoji: "🎁",
      image: "/gatos_juntos.gif"
    },
    {
      title: "¿Qué te pensabas, que te iba a hacer caso?",
      subtitle: "Sé que siempre dices que no te regale nada...",
      content: "Pero lo siento. Prepara el pasaporte...",
      emoji: "✈️",
      image: "/gato_bailando.gif"
    },
    {
      title: "Pista #1",
      subtitle: "Muchas esculturas y templos",
      content: "Para que no olvides tu pasado con la Historia del Arte, a pesar de tu presente como flamante miembro del staff de OT",
      emoji: "🏛️",
      image: "/gato_sufriendo.gif"
    },
    {
      title: "Pista #2",
      subtitle: "Un país con forma de bota",
      content: "Donde muchos sufren cada domingo de F1 con los resultados de cierto equipo",
      emoji: "🥾",
      image: "/gato_sufriendo.gif"
    },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowSurprise(true)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateY: 90,
      transition: { duration: 0.4 }
    }
  }

  const surpriseVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        delay: 0.2
      }
    }
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

  if (showSurprise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 flex items-center justify-center overflow-hidden relative">
        {/* Fondo de imágenes esparcidas */}
        {backgroundImages.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt=""
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: 0.25, 
              scale: 1, 
              rotate: img.rotate 
            }}
            transition={{ 
              delay: index * 0.2,
              duration: 1 
            }}
            className="absolute w-40 h-40 object-cover rounded-2xl shadow-lg"
            style={{
              top: img.top,
              left: img.left,
              zIndex: 0
            }}
          />
        ))}
        
        <motion.div
          variants={surpriseVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto px-6 relative z-10"
        >
          <motion.div
            animate={floatingAnimation}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-red-500 bg-clip-text text-transparent mb-4">
              ¡ITALIA!
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-8"
          >
            <div className="flex justify-center items-center gap-4 mb-6">
              <ReactCountryFlag countryCode="IT" svg style={{ width: '3rem', height: '3rem' }} />
              <span className="text-4xl">✈️</span>
              <ReactCountryFlag countryCode="IT" svg style={{ width: '3rem', height: '3rem' }} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              ¡2 Días en Italia! 🇮🇹
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Tu regalo de cumpleaños: Una aventura romántica juntos
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-700">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="bg-red-50 p-4 rounded-xl"
              >
                <div className="mb-3">
                  <img 
                    src="/gato_sufriendo.gif" 
                    alt="Historia y Arte" 
                    className="w-16 h-16 mx-auto rounded-lg object-cover"
                  />
                </div>
                <span className="text-2xl block mb-2">🏛️</span>
                <strong>Historia & Arte</strong>
                <p className="text-sm">Museos, monumentos y cultura milenaria</p>
              </motion.div>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.7 }}
                className="bg-green-50 p-4 rounded-xl"
              >
                <div className="mb-3">
                  <img 
                    src="/gato_bailando.gif" 
                    alt="Gastronomía" 
                    className="w-16 h-16 mx-auto rounded-lg object-cover"
                  />
                </div>
                <span className="text-2xl block mb-2">🍝</span>
                <strong>Gastronomía</strong>
                <p className="text-sm">Pasta auténtica y gelato delicioso</p>
              </motion.div>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.9 }}
                className="bg-blue-50 p-4 rounded-xl"
              >
                <div className="mb-3">
                  <img 
                    src="/gatos_juntos.gif" 
                    alt="Juntos" 
                    className="w-16 h-16 mx-auto rounded-lg object-cover"
                  />
                </div>
                <span className="text-2xl block mb-2">💕</span>
                <strong>Juntos</strong>
                <p className="text-sm">Creando recuerdos inolvidables</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="text-2xl text-gray-700 font-medium"
          >
            ¡Feliz Cumpleaños, Sofia! 🎉✨
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Fondo de imágenes esparcidas */}
      {backgroundImages.map((img, index) => (
        <motion.img
          key={index}
          src={img.src}
          alt=""
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.2, 
            scale: 1, 
            rotate: img.rotate 
          }}
          transition={{ 
            delay: index * 0.3,
            duration: 1.2 
          }}
          className="absolute w-36 h-36 object-cover rounded-xl shadow-md"
          style={{
            top: img.top,
            left: img.left,
            zIndex: 0
          }}
        />
      ))}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-lg w-full text-center relative z-10"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl mb-6"
          >
            {steps[currentStep].emoji}
          </motion.div>
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-6"
          >
            <img 
              src={steps[currentStep].image} 
              alt={steps[currentStep].title}
              className="w-24 h-24 mx-auto rounded-2xl object-cover shadow-lg"
            />
          </motion.div>
          
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            {steps[currentStep].title}
          </motion.h1>
          
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-6"
          >
            {steps[currentStep].subtitle}
          </motion.p>
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="text-lg text-gray-700 mb-8 min-h-[3rem] flex items-center justify-center mx-15"
          >
            {steps[currentStep].content}
          </motion.div>
          
          <motion.button
            onClick={nextStep}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            {currentStep < steps.length - 1 ? 'Seguir (o no, y me ahorro $)' : '¡Revelar sorpresa! 🎊'}
          </motion.button>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            className="mt-6 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Home