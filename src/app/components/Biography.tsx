export default function Biography() {
  return (
    <section className="bg-white text-campaign-blue" id="about">
      <div className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          I Care About This Community!
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          <img
            src="/skatepark-tamie-deady.jpg"
            alt="tamie Deady"
            className="md:col-span-2 w-full h-full object-cover rounded-xl shadow-md"
          />
          <div className="md:col-span-3 space-y-4 text-lg leading-relaxed">
            <p>
              I was elected to the City Council in 2011, and have proudly served
              for the past 14 years. I am the longest-tenured Councilmember
            </p>
            <p>I was appointed Mayor Pro Tempore in 2015, 2019. 2022-2025</p>
            <p>
              I earned my Association of Washington Cities Advanced Certificate
              of Municipal leadership in 2018
            </p>
            <p>I have received the followinc awards from our community:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>2024: Citizen of the Year</li>
              <li>2016 and 2019: Civil Servant Award</li>
              <li>
                2020: Hero Award for organizing garage sale that raised $26,000
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
<div className="md:col-span-2 space-y-4 text-lg leading-relaxed">
    <p>
      tamie Deady has been serving Black Diamond since 2011, becoming
      its longest-tenured Councilmember. Re-elected in 2015 and 2019,
      she’s a dedicated leader who’s also served as Mayor Pro Tempore
      twice.
    </p>
    <p>
      Born and raised in Black Diamond, tamie is a graduate of Enumclaw
      High School and Highline College. After time in Spokane, she
      returned home to raise her family and build her life right where
      it started.
    </p>
    <p>
      She’s an active community member, volunteering regularly at the
      Black Diamond Community Center, where she also served on the
      Board. tamie earned the AWC Advanced Certificate of Municipal
      Leadership in 2018.
    </p>
    <p>
      Her service has earned multiple community awards, including Civil
      Servant and Hero honors. tamie enjoys time with her grandchildren,
      outdoor adventures, and competing in sports like volleyball and
      racquetball.
    </p>
  </div>
*/
