# BanglaDateJS
Javascript based library to display bangla date.

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
// dateConverte = 'বুয়েটে এখন: রবিবার রাত ৪টা ৩০মিনিট, ১০ জ্যৈষ্ঠ, ১৪২২ (বঙ্গাব্দ)';
// now dateConverted is converted as a Bangla date
```
আপনারা চাইলে buetDateConverter এর constructor এ নিজস্ব custom-date ও পাঠাতে পারেন। তখন এভাবে কল করুন:
```javascript
var customDate = new Date();
var dateConverted = new buetDateConverter().convert("<your custom format>");
// now dateConverted is converted as a Bangla date
```

# ডেমো?
http://www.buetian.com/ সাইটে যেয়ে উপরে ব্যানারে ডান দিকে খেয়াল করুন :-)

# লাইসেন্স
ওপেন সোর্স, ফ্রি এবং যেকোন রকম অ্যাপ্লিকেশনে ব্যবহার উপযোগী (ব্যক্তিগত/বাণিজ্যিক উভয়ই) লাইসেন্সের একটি Apache license
