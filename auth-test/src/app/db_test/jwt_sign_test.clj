(ns app.db-test.jwt-sign-test
  (:require [buddy.sign.jwt :as jwt]))





(jwt/sign {:userid 1} "secret")
;=> "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOjF9.kHj3dQt4bViKHDCg9AklavdUv0Bdk4ufWdHd-TzYoJY"


(def data (jwt/sign {:userid 1} "secret"))

(jwt/unsign data "secret")
;=> {:userid 1}

