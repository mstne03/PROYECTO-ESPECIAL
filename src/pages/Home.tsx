import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactCountryFlag from 'react-country-flag'

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showSurprise, setShowSurprise] = useState(false)
  const [userAnswer, setUserAnswer] = useState("")
  const [showFlag, setShowFlag] = useState(false)

  // Verificar si la respuesta es correcta al hacer submit
  const handleSubmit = () => {
    if (userAnswer.toLowerCase().trim() === "italia") {
      setShowFlag(true)
    } else {
      setShowFlag(false)
    }
  }

  // Helper para rutas de imágenes
  const getImagePath = (imageName: string) => {
    const basePath = import.meta.env.PROD ? '/PROYECTO-ESPECIAL' : ''
    return `${basePath}/${imageName}`
  }

  // Imágenes de fondo esparcidas
  const backgroundImages = [
    { src: getImagePath("luke_durmiendo.jpg"), top: "25%", left: "15%", rotate: -15 },
    { src: getImagePath("luke_tocando_camara.jpg"), top: "65%", left: "80%", rotate: 12 },
    { src: getImagePath("marc_peluca.jpg"), top: "35%", left: "75%", rotate: -8 },
    { src: getImagePath("sofi_coche.jpg"), top: "55%", left: "10%", rotate: 18 },
    { src: getImagePath("sofi_marc.jpg"), top: "45%", left: "85%", rotate: -12 },
    { src: getImagePath("sofi_prueba_superada.jpg"), top: "70%", left: "20%", rotate: 15 },
  ]

  const steps = [
    {
      title: "Hey Sofiki",
      subtitle: "Preparada?",
      content: "Este año mi regalo viene envuelto en algunas líneas de código",
      mensajeExtra: "Mira que guapa sales eh",
      emoji: "🎁",
      image: getImagePath("imagen_1.jpg")
    },
    {
      title: "¿Qué te pensabas, que te iba a hacer caso?",
      subtitle: "Sé que siempre dices que no te regale nada...",
      content: "Pero lo siento. Prepara el pasaporte...",
      mensajeExtra: "Hasta en blanco y negro! Joe...",
      emoji: "✈️",
      image: getImagePath("imagen_2.jpg")
    },
    {
      title: "Pista #1",
      subtitle: "Muchas esculturas y templos",
      content: "Para que no olvides tu pasado con la Historia del Arte, a pesar de tu presente como flamante miembro del staff de OT",
      mensajeExtra: "Tú y yo, después de que te haga este regalo",
      emoji: "🏛️",
      image: getImagePath("imagen_3.jpg")
    },
    {
      title: "Pista #2",
      subtitle: "Un país con forma de bota",
      content: "Donde muchos sufren cada domingo de F1 con los resultados de cierto equipo",
      mensajeExtra: "Y le rezan a los dioses del tarot",
      emoji: "🥾",
      image: getImagePath("imagen_tarot.jpg")
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

  if (showSurprise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 flex items-center justify-center overflow-hidden relative max-w-full md:overflow-x-hidden">
        {/* Fondo de imágenes esparcidas */}
        {backgroundImages.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt=""
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: 0.15, 
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
          className="text-center max-w-2xl mx-auto px-6 relative z-10"
        >
          {/* Bandera de Italia oculta detrás del interrogante */}
          <div className="relative mb-8">
            {/* Bandera de Italia */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: showFlag ? 1 : 0, 
                rotate: showFlag ? 0 : -180,
                opacity: showFlag ? 1 : 0
              }}
              transition={{ duration: 1, type: "spring" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <ReactCountryFlag 
                countryCode="IT" 
                svg 
                style={{ 
                  width: '12rem', 
                  height: '8rem',
                  borderRadius: '1rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }} 
              />
            </motion.div>

            {/* Interrogante grande con gradiente */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: showFlag ? 0 : 1, 
                opacity: showFlag ? 0 : 1 
              }}
              transition={{ 
                delay: showFlag ? 0 : 1, 
                duration: 0.8, 
                type: "spring" 
              }}
              className="relative z-10"
            >
              <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-red-500 via-green-500 to-red-600 bg-clip-text text-transparent leading-none">
                ?
              </h1>
            </motion.div>
          </div>

          {/* Frase */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          >
            ¿Lo has adivinado?
          </motion.h2>

          {/* Input y botón */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="max-w-md mx-auto space-y-4"
          >
            <input
              type="text"
              placeholder="tu respuesta aquí"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit()
                }
              }}
              className="w-full px-6 py-4 text-lg text-center bg-white/90 backdrop-blur-sm border-2 border-pink-200 rounded-2xl shadow-lg focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-200 transition-all duration-300 placeholder-gray-400"
            />
            
            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-500 via-green-500 to-red-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform"
            >
              ¡Confirmar respuesta! 🎯
            </motion.button>
          </motion.div>

          {/* Mensaje de felicitación */}
          {showFlag && (
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              className="mt-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-red-600 bg-clip-text text-transparent">
                ¡Exacto! ¡Nos vamos a Italia! 🇮🇹✨
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                ¡Feliz Cumpleaños, Sofiki! 🎉
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 flex items-center justify-center p-6 relative overflow-hidden max-w-full md:overflow-x-hidden">
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
            className="mb-6 relative flex justify-center items-center"
          >
            <img 
              src={steps[currentStep].image} 
              alt={steps[currentStep].title}
              className="w-24 h-24 rounded-2xl object-cover shadow-lg"
            />
            
            {/* Mensaje flotante al lado de la imagen */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute left-1/2 top-1/2 transform -translate-y-1/2 translate-x-8 ml-2"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md border border-pink-200 relative">
                {/* Flecha apuntando a la imagen */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full">
                  <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-transparent border-r-white/90"></div>
                </div>
                <p className="text-xs text-gray-600 whitespace-nowrap font-medium">
                  {steps[currentStep].mensajeExtra}
                </p>
              </div>
            </motion.div>
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