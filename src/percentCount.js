export default function differenceInPercent(a, b) {
    return  100 * ( ( a - b ) / ( (a+b)/2 ) );
  }