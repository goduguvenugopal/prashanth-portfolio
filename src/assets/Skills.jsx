import React from 'react'

const Skills = () => {
  return (
    <section className="bg-gray-50 pb-16 px-6 text-center">
    {/* Skills Title */}
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold uppercase border-2 border-black inline-block px-8 py-2">
        Skills
      </h2>
    </div>

    {/* Using Now Section */}
    <div className="mt-12">
      <h3 className="text-lg font-semibold text-gray-700 uppercase">Using Now:</h3>
      <div className="mt-6 flex justify-center gap-12 flex-wrap">
        {/* Figma */}
        <div className="text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            alt="Figma"
            className="w-16 h-16 mx-auto"
          />
          <p className="mt-2 text-gray-700 font-medium">FIGMA</p>
        </div>
        {/* Adobe XD */}
        <div className="text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg"
            alt="Adobe XD"
            className="w-16 h-16 mx-auto"
          />
          <p className="mt-2 text-gray-700 font-medium">ADOBE XD</p>
        </div>
        {/* Photoshop */}
        <div className="text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
            alt="Photoshop"
            className="w-16 h-16 mx-auto"
          />
          <p className="mt-2 text-gray-700 font-medium">PHOTOSHOP</p>
        </div>
        {/* Illustrator */}
        <div className="text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
            alt="Illustrator"
            className="w-16 h-16 mx-auto"
          />
          <p className="mt-2 text-gray-700 font-medium">ILLUSTRATOR</p>
        </div>
      </div>
    </div>

    {/* Learning Section */}
    <div className="mt-12">
      <h3 className="text-lg font-semibold text-gray-700 uppercase">Learning:</h3>
      <div className="mt-6 flex justify-center gap-12 flex-wrap">
        {/* HTML */}
        <div className="text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML"
            className="w-16 h-16 mx-auto"
          />
          <p className="mt-2 text-gray-700 font-medium">HTML</p>
        </div>
        {/* CSS */}
        <div className="text-center">
          <img
            src="data:image/png;base64,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"
            alt="CSS"
            className="w-16 h-16 mx-auto"
          />
          <p className="mt-2 text-gray-700 font-medium">CSS</p>
        </div>
        {/* JavaScript */}
        <div className="text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="JavaScript"
            className="w-16 h-16 mx-auto"
          />
          <p className="mt-2 text-gray-700 font-medium">JAVASCRIPT</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills