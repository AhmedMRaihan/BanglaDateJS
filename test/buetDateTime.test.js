const buetDateConverter = require('../src/buetDateTime.js');

const localToUTC = (date) => {
    // By setting TZ=UTC in config, we don't need this function anymore. https://stackoverflow.com/a/46980825
    // Alternative would be: https://stackoverflow.com/a/16048201 
    return date;
}

describe('System date conversion', () => {
    it('Current year value will match', () => {
        let currentTime = new buetDateConverter();
        expect(currentTime.convert("Y")).toBe('১৪২৬');
    });

    it('Initial epoch value will match', () => {
        // 1970-01-01T00:00:01.001+0000
        let epochTime = new buetDateConverter(localToUTC(new Date(0)));
        expect(epochTime.convert("Y-m-dTH:i:s (A)")).toBe('১৩৭৬-৯-১৭T০০:০:০ (রাত)');
    });
});

describe("Commonly used formats", () => {
    // 2004-12-11T19:47:10.928+0600
    let date = localToUTC(new Date(1102794430928));
    let convertedDate = new buetDateConverter(date);

    it("ISO-8601 format conversion will match", () => {
        expect(convertedDate.convert("Y-m-dTH:i:s")).toBe('১৪১১-৮-২৭T১৯:৪৭:১০');
    });

    it("Time format from daily life will match", () => {
        expect(convertedDate.convert("d F, A hটা i মিনিট s সেকেন্ড, Y"))
            .toBe('২৭ অগ্রহায়ণ, সন্ধ্যা ৭টা ৪৭ মিনিট ১০ সেকেন্ড, ১৪১১');
    });
});

describe("Rarely used formats", () => {

    // Wed, 06 Jan 2016 09:03:04 GMT
    var singleDigitDate = localToUTC(new Date(1452070984123));
    var convertedSingleDigitDate = new buetDateConverter(singleDigitDate);

    it("Single digit hour representation is ok", () => {
        expect(convertedSingleDigitDate.convert("H")).toBe("০৯");
    });
    it("Month conversion is ok", () => {
        expect(convertedSingleDigitDate.convert("F")).toBe('পৌষ');
    });
});

describe("Leap year", () => {

    it("User provided date is properly converted", () => {
        // 2012-02-29T21:31:24.029+0000
        let leapYear = localToUTC(new Date(1330551084029));
        let convertedLeapYear = new buetDateConverter(leapYear);

        expect(convertedLeapYear.convert("l, j F Y, A g:i")).toBe('বুধবার, ১৭ ফাল্গুন ১৪১৮, রাত ৯:৩১');
    });

    it("Bengali calendar date after leap year day", () => {
        // 2016-03-14T01:02:03.459+0600
        let bnLeapYear = localToUTC(new Date(1457917323459));
        let bnConvertedLeapYear = new buetDateConverter(bnLeapYear);
        expect(bnConvertedLeapYear.convert("j F")).toBe('৩১ ফাল্গুন');
    });

});
