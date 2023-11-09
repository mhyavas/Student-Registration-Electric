(ns db-test.t11)



(def sample {:db/id 74766790688939,
             :msg/id 90,
             :msg/message "test11-reply-reply-reply",
             :msg/timestamp 1698925052299,
             :msg/title "test3",
             :msg/reply_to {:db/id 74766790688935},
             :msg/author {:db/id 101155069755527}})


(def sample2 {:db/id 74766790688939,
              :msg/id 90,
              :msg/message "test11-reply-reply-reply",
              :msg/timestamp 1698925052299,
              :msg/title "test3",
              :msg/author {:db/id 101155069755527}})


(:msg/reply_to sample2)