import React from 'react'

const Projects = () => {
  return (
    <section className="bg-black py-16 px-6 text-center">
    {/* Portfolio Title */}
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold uppercase border-2 border-black inline-block px-8 py-2 bg-white">
        Portfolio
      </h2>
    </div>

    {/* Filter Options */}
    <div className="mt-6 text-white">
      <div className="flex justify-center space-x-8">
        <span className="border-b-2 border-white pb-1 cursor-pointer">ALL</span>
        <span className="text-gray-500 cursor-pointer">DESIGNED</span>
      </div>
    </div>

    {/* Projects Grid */}
    <div className="mt-12 grid grid-cols-3 gap-4 max-w-5xl mx-auto">
      {/* Project 1 */}
      <div className="relative group">
        <img
          src="https://images.pexels.com/photos/31091777/pexels-photo-31091777/free-photo-of-cultural-portrait-of-a-woman-in-traditional-kimono.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Personal Portfolio"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-lg font-bold">PROJECT 1<br />PERSONAL PORTFOLIO</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="relative group">
        <img
          src="https://images.pexels.com/photos/31096189/pexels-photo-31096189/free-photo-of-artist-painting-scenic-lake-view-in-serene-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Adventure Website"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-lg font-bold">PROJECT 2<br />ADVENTURE WEBSITE</p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="relative group">
        <img
          src=" https://images.pexels.com/photos/16237456/pexels-photo-16237456/free-photo-of-wide-street-among-modern-skyscrapers-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Brighton Website"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-lg font-bold">PROJECT 3<br />BRIGHTON WEBSITE</p>
        </div>
      </div>

      {/* Project 4 */}
      <div className="relative group">
        <img
          src="https://images.pexels.com/photos/14379450/pexels-photo-14379450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Groceyish Website"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-lg font-bold">PROJECT 4<br />GROCEYISH WEBSITE</p>
        </div>
      </div>

      {/* Project 5 */}
      <div className="relative group">
        <img
          src="https://images.pexels.com/photos/19926864/pexels-photo-19926864/free-photo-of-waves-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="App Login Page"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-lg font-bold">PROJECT 5<br />APP LOGIN PAGE</p>
        </div>
      </div>

      {/* More to Come */}
      <div className="relative group">
        <img
          src="https://images.pexels.com/photos/14379450/pexels-photo-14379450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="More Projects"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-lg font-bold">MANY MORE TO COME!</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projects