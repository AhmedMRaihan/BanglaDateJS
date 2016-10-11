# BanglaDateJS [![Build Status](https://travis-ci.org/MythicAngel/BanglaDateJS.png)](https://travis-ci.org/MythicAngel/BanglaDateJS) [![Coverage Status](https://coveralls.io/repos/github/MythicAngel/BanglaDateJS/badge.svg?branch=master)](https://coveralls.io/github/MythicAngel/BanglaDateJS?branch=master)
Javascript based library to display bangla date.

At present, 92.41% code coverage is achieved in test cases.

# জাভাস্ক্রিপ্টের মাধ্যমে বাংলা তারিখ প্রদর্শন
এই লাইব্রেরীটি তৈরীর মূল উদ্দেশ্য বাংলা তারিখ/সন সঠিকভাবে নির্ণয় করে প্রদর্শন করা। বর্তমানে যেইসব লাইব্রেরী রয়েছে সেগুলো রোমান ক্যালেন্ডার অনুসারে মাস ও তারিখ প্রদর্শন করে কিন্তু এই লাইব্রেরী দ্বারা আপনারা বাংলা মাস ও সপ্তাহের দিন প্রদর্শন/নির্ণয় করতে পারবে।

# ব্যবহার নির্দেশিকা
 এই লাইব্রেরীটি ব্যবহার করতে অন্য কোন লাইব্রেরী আবশ্যক নয়। প্রথমে লাইব্রেরীটি লোড করুন আপনার কোডে:
```javascript
<script type='text/javascript' src='<path-to-buetDateTime.js'></script>
```
এরপরে নিচের কোডটি কল করুন convert ফাংশনে আপনার দরকার মতো প্যারামিটার দিয়ে:
```javascript
var dateConverted = new buetDateConverter().convert("বুয়েটে এখন: l A gটা iমিনিট, j F, Y (বঙ্গাব্দ)");
// dateConverted = 'বুয়েটে এখন: রবিবার রাত ৪টা ৩০মিনিট, ১০ জ্যৈষ্ঠ, ১৪২২ (বঙ্গাব্দ)';
// now dateConverted is converted as a Bangla date
```
আপনারা চাইলে buetDateConverter এর constructor এ নিজস্ব custom-date ও পাঠাতে পারেন। তখন এভাবে কল করুন:
```javascript
var customDate = new Date();
var dateConverted = new buetDateConverter(customDate).convert("<your custom format>");
// now dateConverted is converted as a Bangla date
```
সতর্কতা: 
 * custom-date পাঠালে এই লাইব্রেরীটি তাতে কোনরূপ পরিবর্তন করেনা। যদি আপনারা ভুল ফলাফল পাচ্ছেন মনে করেন, তাহলে অনুগ্রহ করে custom-date টি আপনার লোকাল সিস্টেম থেকে নেয়া সময় নাকি UTC সময় ভালোভাবে পরীক্ষা করে দেখুন।
 * শূন্য এর অধিক যেকোন epoch এর জন্যে এই লাইব্রেরীটি সঠিকভাবে কাজ করবে। এর নিচে হলে এর ফলাফল undefined অথবা ভুল আসতে পারে।

# প্যারামিটার তালিকা

এখানে প্যারামিটারগুলোকে PHP এর Date ফাংশনের আদলে রাখা হয়েছে। সংগত কারণেই এখন সবগুলোর সাপোর্ট নেই কিন্তু কোডটি এমনভাবে লেখা যে, যেকোন প্যারামিটারকেই সংযোজন করা যাবে ভবিষ্যতে ```prepareDateInstanceFormats``` ফাংশন এর সাহায্যে। নিম্নে বর্তমানে সাপোর্ট দেয়া হয়েছে এমন প্যারামিটারগুলোর তালিকা দেয়া হলো:

+ বছর
 1. Y = বছর (১৯৭০~৯৯৯৯ এর মতো বিস্তারিত রূপ)
+ মাস
 3. F =  বাংলা মাস পূর্ণরূপ(বৈশাখ ~ চৈত্র)
 4. m =  বাংলা মাস ক্রম(১~১২)
+ দিন
 5. d = মাসের নির্দিষ্ট একটি দিন (১ ~ ৩১ এর মতো)
 6. j = মাসের নির্দিষ্ট একটি দিন (১ ~ ৩১)
 7. l = সপ্তাহের নির্দিষ্ট একটি দিন (শনিবার ~ শুক্রবার)
+ সময়
 8. H = ঘন্টা (০০ ~ ২৩ এর মতো করে ২৪ ঘন্টা দেখানোর ফর্ম্যাট)
 9. h = ঘন্টা (০ ~ ১১ এর মতো করে ১২ ঘন্টা দেখানোর ফর্ম্যাট) 
 10. A = দিন/রাত এর বিভিন্ন অবস্থা (সকাল ~ রাত)
 11. i = মিনিট
 12. s = সেকেন্ড
 
# ডেমো?
http://www.buetian.com/ সাইটে যেয়ে উপরে ব্যানারে ডান দিকে খেয়াল করুন :-) অথবা এই রিপোজিটরীটির test ফোল্ডারে থাকা html ফাইল(গুলো) দেখুন।

# লাইসেন্স
ওপেন সোর্স, ফ্রি এবং যেকোন রকম অ্যাপ্লিকেশনে ব্যবহার উপযোগী (ব্যক্তিগত/বাণিজ্যিক উভয়ই) লাইসেন্সের একটি Apache license
