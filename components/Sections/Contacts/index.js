import React from 'react';

import ContactsForm from "../ContactsForm";

export default function Contacts(props) {
  return (
    <section className="relative block md:pt-16 lg:pt-0 mt-0 lg:mt-20 overflow-hidden">
      <div className="container-none mx-auto">
        <div className="flex flex-wrap bg-trueGray-200">
          <div className="w-full width-40 padding-box-x box-twoColumn-left c-bg-trueGray-700 md:pl-20 md:pr-12 lg:mb-0 extra-large-50">
            <div className="relative flex flex-col min-w-0 break-words w-full">
              <div className="flex-auto ">
                <h4 className="text-white text-4xl font-extrabold w-full mb-8 mt-14 text-left">
                  Our offices
                </h4>
                <div className="w-full mt-4 mb-4 border-b border-gray-300">
                  <h6 className="text-lg font-extrabold text-white ">
                    UAE
                  </h6>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      Level 14,
                      Boulevard Plaza
                      Tower 1, Sheikh
                      Mohammed Bin
                      Rashid Boulevard,
                      Downtown Dubai,
                      United Arab
                      Emirates
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="phone"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +971 58503 300
                      </p>
                    </div>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      Digital Park
                      Building A2, Unit
                      101 DUBAI Silicon
                      Oasis Dubai
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="phone"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +97142285285
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4 mb-4 border-b border-gray-300">
                  <h6 className="text-lg font-extrabold text-white ">
                    Germany
                  </h6>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      iSAP Solutions ltd
                      , Hopfenstr 4,
                      80335 München
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="phone"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +49 89 541 989 99
                      </p>
                    </div>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      Kurfürstendamm 11,
                      10711 Berlin,
                      Germany
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="pointer"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +49 30 41 7017
                        760
                      </p>
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +49 30 7223 9999
                        60
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4 mb-4 border-b border-gray-300">
                  <h6 className="text-lg font-extrabold text-white">
                    Austria
                  </h6>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      Donau City Strasse
                      7, 1220 Wien,
                      Austria
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="phone"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +44 144390739
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4 mb-4 border-b border-gray-300">
                  <h6 className="text-lg font-extrabold text-white">
                    UK
                  </h6>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      Courtyard, The Old
                      Monastery,
                      Windhill, Bishop´s
                      Stortfort, CM23
                      2N, United Kingdom
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="phone"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +44 144 390739
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="w-full mt-4 mb-4 border-b border-gray-300">
                  <h6 className="text-lg font-extrabold text-white">
                    Ukraine
                  </h6>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      Vyacheslav
                      Chornovil Ave, 30
                      а, Kolomyya,
                      Ivano-Frankivsk
                      Oblast, 78200
                      Ukraine
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="phone"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +380 95 75 25
                        888
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="w-full mt-4 mb-4 border-b border-gray-300">
                  <h6 className="text-lg font-extrabold text-white">
                    Canada
                  </h6>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      iSAP Solutions LLC
                      Canada , 3400
                      Inland Empire
                      Boulevard Ontario,
                      CA 91764
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="phone"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +13 65 65 06 518
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4 mb-4 border-b border-gray-300">
                  <h6 className="text-lg font-extrabold text-white">
                    China
                  </h6>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      iSAP Solutions LLC
                      China , LiuHe
                      Village, 3, 1108,
                      TangHe Town,
                      GongChangling
                      Distrcit,
                      Liaoning, China
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="phone"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +86 150 6651
                        7569
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4 mb-4 border-b border-gray-300">
                  <h6 className="text-lg font-extrabold text-white">
                    Turkey
                  </h6>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      Folkart Towers,
                      Adalet Mah., Manas
                      Bulvarı No:39 B
                      Blok K:31, 35580
                      Bayraklı/İzmir
                      Turkey
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="phone"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +90 534 323 8490
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4 mb-4 border-b border-gray-300">
                  <h6 className="text-lg font-extrabold text-white">
                    Russia
                  </h6>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      iSAP Solutions
                      OOO, 194021 Saint
                      Petersburg,
                      Polytechnicheskaya
                      street no 6/1/699
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="phone"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +79 11 91 19 001
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-4 mb-4">
                  <h6 className="text-lg font-extrabold text-white">
                    Morocco
                  </h6>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/pointer.png"
                      alt="pointer"
                      className="object-contain mt-1"
                    />
                    <p className="pl-4 text-trueGray-300 text-sm">
                      Hay Mabrouka Av
                      Nil Casa Nr 74,
                      Casablanca,
                      Morocco
                    </p>
                  </div>
                  <div className="flex my-2 align-top">
                    <img
                      src="/img/phone.png"
                      alt="phone"
                      className="object-contain"
                    />
                    <div className="flex-1 flex-col">
                      <p className="pl-4 text-trueGray-300 text-sm">
                        +212 698-707379
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full width-60 padding-box-x box-twoColumn-right relative extra-large-50">
            <div className="w-full">
              <img
                src="/img/map_b_w.png"
                alt="map"
                className="w-full relative"
              />
            </div>
            <ContactsForm />
          </div>
        </div>
      </div>
    </section>
  );
}