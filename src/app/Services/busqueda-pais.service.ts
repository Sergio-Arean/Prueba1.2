import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
   paises: { nombre: string, abreviatura: string }[] = [
{ nombre: 'país', abreviatura: 'abreviación' },
{ nombre: 'Afghanistan', abreviatura: 'AF' },
{ nombre: 'Albania', abreviatura: 'AL' },
{ nombre: 'Algeria', abreviatura: 'DZ' },
{ nombre: 'American Samoa', abreviatura: 'AS' },
{ nombre: 'Andorra', abreviatura: 'AD' },
{ nombre: 'Angola', abreviatura: 'AO' },
{ nombre: 'Anguilla', abreviatura: 'AI' },
{ nombre: 'Antarctica', abreviatura: 'AQ' },
{ nombre: 'Antigua and Barbuda', abreviatura: 'AG' },
{ nombre: 'Argentina', abreviatura: 'AR' },
{ nombre: 'Armenia', abreviatura: 'AM' },
{ nombre: 'Aruba', abreviatura: 'AW' },
{ nombre: 'Australia', abreviatura: 'AU' },
{ nombre: 'Austria', abreviatura: 'AT' },
{ nombre: 'Azerbaijan', abreviatura: 'AZ' },
{ nombre: 'Bahamas (the)', abreviatura: 'BS' },
{ nombre: 'Bahrain', abreviatura: 'BH' },
{ nombre: 'Bangladesh', abreviatura: 'BD' },
{ nombre: 'Barbados', abreviatura: 'BB' },
{ nombre: 'Belarus', abreviatura: 'BY' },
{ nombre: 'Belgium', abreviatura: 'BE' },
{ nombre: 'Belize', abreviatura: 'BZ' },
{ nombre: 'Benin', abreviatura: 'BJ' },
{ nombre: 'Bermuda', abreviatura: 'BM' },
{ nombre: 'Åland Islands', abreviatura: 'AX' },
{ nombre: 'Bhutan', abreviatura: 'BT' },
{ nombre: 'Bolivia (Plurinational State of)', abreviatura: 'BO' },
{ nombre: 'Bonaire, Sint Eustatius and Saba', abreviatura: 'BQ' },
{ nombre: 'Bosnia and Herzegovina', abreviatura: 'BA' },
{ nombre: 'Botswana', abreviatura: 'BW' },
{ nombre: 'Bouvet Island', abreviatura: 'BV' },
{ nombre: 'Brazil', abreviatura: 'BR' },
{ nombre: 'British Indian Ocean Territory (the)', abreviatura: 'IO' },
{ nombre: 'Brunei Darussalam', abreviatura: 'BN' },
{ nombre: 'Bulgaria', abreviatura: 'BG' },
{ nombre: 'Burkina Faso', abreviatura: 'BF' },
{ nombre: 'Burundi', abreviatura: 'BI' },
{ nombre: 'Cabo Verde', abreviatura: 'CV' },
{ nombre: 'Cambodia', abreviatura: 'KH' },
{ nombre: 'Cameroon', abreviatura: 'CM' },
{ nombre: 'Canada', abreviatura: 'CA' },
{ nombre: 'Cayman Islands (the)', abreviatura: 'KY' },
{ nombre: 'Central African Republic (the)', abreviatura: 'CF' },
{ nombre: 'Chad', abreviatura: 'TD' },
{ nombre: 'Chile', abreviatura: 'CL' },
{ nombre: 'China', abreviatura: 'CN' },
{ nombre: 'Christmas Island', abreviatura: 'CX' },
{ nombre: 'Cocos (Keeling) Islands (the)', abreviatura: 'CC' },
{ nombre: 'Colombia', abreviatura: 'CO' },
{ nombre: 'Comoros (the)', abreviatura: 'KM' },
{ nombre: 'Congo (the Democratic Republic of the)', abreviatura: 'CD' },
{ nombre: 'Congo (the)', abreviatura: 'CG' },
{ nombre: 'Cook Islands (the)', abreviatura: 'CK' },
{ nombre: 'Costa Rica', abreviatura: 'CR' },
{ nombre: 'Croatia', abreviatura: 'HR' },
{ nombre: 'Cuba', abreviatura: 'CU' },
{ nombre: 'Curaçao', abreviatura: 'CW' },
{ nombre: 'Cyprus', abreviatura: 'CY' },
{ nombre: 'Czechia', abreviatura: 'CZ' },
{ nombre: 'Côte d Ivoire', abreviatura: 'CI' },
{ nombre: 'Denmark', abreviatura: 'DK' },
{ nombre: 'Djibouti', abreviatura: 'DJ' },
{ nombre: 'Dominica', abreviatura: 'DM' },
{ nombre: 'Dominican Republic (the)', abreviatura: 'DO' },
{ nombre: 'Ecuador', abreviatura: 'EC' },
{ nombre: 'Egypt', abreviatura: 'EG' },
{ nombre: 'El Salvador', abreviatura: 'SV' },
{ nombre: 'Equatorial Guinea', abreviatura: 'GQ' },
{ nombre: 'Eritrea', abreviatura: 'ER' },
{ nombre: 'Estonia', abreviatura: 'EE' },
{ nombre: 'Eswatini', abreviatura: 'SZ' },
{ nombre: 'Ethiopia', abreviatura: 'ET' },
{ nombre: 'Falkland Islands (the) [Malvinas]', abreviatura: 'FK' },
{ nombre: 'Faroe Islands (the)', abreviatura: 'FO' },
{ nombre: 'Fiji', abreviatura: 'FJ' },
{ nombre: 'Finland', abreviatura: 'FI' },
{ nombre: 'France', abreviatura: 'FR' },
{ nombre: 'French Guiana', abreviatura: 'GF' },
{ nombre: 'French Polynesia', abreviatura: 'PF' },
{ nombre: 'French Southern Territories (the)', abreviatura: 'TF' },
{ nombre: 'Gabon', abreviatura: 'GA' },
{ nombre: 'Gambia (the)', abreviatura: 'GM' },
{ nombre: 'Georgia', abreviatura: 'GE' },
{ nombre: 'Germany', abreviatura: 'DE' },
{ nombre: 'Ghana', abreviatura: 'GH' },
{ nombre: 'Gibraltar', abreviatura: 'GI' },
{ nombre: 'Greece', abreviatura: 'GR' },
{ nombre: 'Greenland', abreviatura: 'GL' },
{ nombre: 'Grenada', abreviatura: 'GD' },
{ nombre: 'Guadeloupe', abreviatura: 'GP' },
{ nombre: 'Guam', abreviatura: 'GU' },
{ nombre: 'Guatemala', abreviatura: 'GT' },
{ nombre: 'Guernsey', abreviatura: 'GG' },
{ nombre: 'Guinea', abreviatura: 'GN' },
{ nombre: 'Guinea-Bissau', abreviatura: 'GW' },
{ nombre: 'Guyana', abreviatura: 'GY' },
{ nombre: 'Haiti', abreviatura: 'HT' },
{ nombre: 'Heard Island and McDonald Islands', abreviatura: 'HM' },
{ nombre: 'Holy See (the)', abreviatura: 'VA' },
{ nombre: 'Honduras', abreviatura: 'HN' },
{ nombre: 'Hong Kong', abreviatura: 'HK' },
{ nombre: 'Hungary', abreviatura: 'HU' },
{ nombre: 'Iceland', abreviatura: 'IS' },
{ nombre: 'India', abreviatura: 'IN' },
{ nombre: 'Indonesia', abreviatura: 'ID' },
{ nombre: 'Iran (Islamic Republic of)', abreviatura: 'IR' },
{ nombre: 'Iraq', abreviatura: 'IQ' },
{ nombre: 'Ireland', abreviatura: 'IE' },
{ nombre: 'Isle of Man', abreviatura: 'IM' },
{ nombre: 'Israel', abreviatura: 'IL' },
{ nombre: 'Italy', abreviatura: 'IT' },
{ nombre: 'Jamaica', abreviatura: 'JM' },
{ nombre: 'Japan', abreviatura: 'JP' },
{ nombre: 'Jersey', abreviatura: 'JE' },
{ nombre: 'Jordan', abreviatura: 'JO' },
{ nombre: 'Kazakhstan', abreviatura: 'KZ' },
{ nombre: 'Kenya', abreviatura: 'KE' },
{ nombre: 'Kiribati', abreviatura: 'KI' },
{ nombre: 'Korea (the Democratic Peoples Republic of)', abreviatura: 'KP' },
{ nombre: 'Korea (the Republic of)', abreviatura: 'KR' },
{ nombre: 'Kuwait', abreviatura: 'KW' },
{ nombre: 'Kyrgyzstan', abreviatura: 'KG' },
{ nombre: 'Lao Peoples Democratic Republic (the)', abreviatura: 'LA' },
{ nombre: 'Latvia', abreviatura: 'LV' },
{ nombre: 'Lebanon', abreviatura: 'LB' },
{ nombre: 'Lesotho', abreviatura: 'LS' },
{ nombre: 'Liberia', abreviatura: 'LR' },
{ nombre: 'Libya', abreviatura: 'LY' },
{ nombre: 'Liechtenstein', abreviatura: 'LI' },
{ nombre: 'Lithuania', abreviatura: 'LT' },
{ nombre: 'Luxembourg', abreviatura: 'LU' },
{ nombre: 'Macao', abreviatura: 'MO' },
{ nombre: 'Madagascar', abreviatura: 'MG' },
{ nombre: 'Malawi', abreviatura: 'MW' },
{ nombre: 'Malaysia', abreviatura: 'MY' },
{ nombre: 'Maldives', abreviatura: 'MV' },
{ nombre: 'Mali', abreviatura: 'ML' },
{ nombre: 'Malta', abreviatura: 'MT' },
{ nombre: 'Marshall Islands (the)', abreviatura: 'MH' },
{ nombre: 'Martinique', abreviatura: 'MQ' },
{ nombre: 'Mauritania', abreviatura: 'MR' },
{ nombre: 'Mauritius', abreviatura: 'MU' },
{ nombre: 'Mayotte', abreviatura: 'YT' },
{ nombre: 'Mexico', abreviatura: 'MX' },
{ nombre: 'Micronesia (Federated States of)', abreviatura: 'FM' },
{ nombre: 'Moldova (the Republic of)', abreviatura: 'MD' },
{ nombre: 'Monaco', abreviatura: 'MC' },
{ nombre: 'Mongolia', abreviatura: 'MN' },
{ nombre: 'Montenegro', abreviatura: 'ME' },
{ nombre: 'Montserrat', abreviatura: 'MS' },
{ nombre: 'Morocco', abreviatura: 'MA' },
{ nombre: 'Mozambique', abreviatura: 'MZ' },
{ nombre: 'Myanmar', abreviatura: 'MM' },
{ nombre: 'Namibia', abreviatura: 'NA' },
{ nombre: 'Nauru', abreviatura: 'NR' },
{ nombre: 'Nepal', abreviatura: 'NP' },
{ nombre: 'Netherlands (Kingdom of the)', abreviatura: 'NL' },
{ nombre: 'New Caledonia', abreviatura: 'NC' },
{ nombre: 'New Zealand', abreviatura: 'NZ' },
{ nombre: 'Nicaragua', abreviatura: 'NI' },
{ nombre: 'Niger (the)', abreviatura: 'NE' },
{ nombre: 'Nigeria', abreviatura: 'NG' },
{ nombre: 'Niue', abreviatura: 'NU' },
{ nombre: 'Norfolk Island', abreviatura: 'NF' },
{ nombre: 'North Macedonia', abreviatura: 'MK' },
{ nombre: 'Northern Mariana Islands (the)', abreviatura: 'MP' },
{ nombre: 'Norway', abreviatura: 'NO' },
{ nombre: 'Oman', abreviatura: 'OM' },
{ nombre: 'Pakistan', abreviatura: 'PK' },
{ nombre: 'Palau', abreviatura: 'PW' },
{ nombre: 'Palestine, State of', abreviatura: 'PS' },
{ nombre: 'Panama', abreviatura: 'PA' },
{ nombre: 'Papua New Guinea', abreviatura: 'PG' },
{ nombre: 'Paraguay', abreviatura: 'PY' },
{ nombre: 'Peru', abreviatura: 'PE' },
{ nombre: 'Philippines (the)', abreviatura: 'PH' },
{ nombre: 'Pitcairn', abreviatura: 'PN' },
{ nombre: 'Poland', abreviatura: 'PL' },
{ nombre: 'Portugal', abreviatura: 'PT' },
{ nombre: 'Puerto Rico', abreviatura: 'PR' },
{ nombre: 'Qatar', abreviatura: 'QA' },
{ nombre: 'Romania', abreviatura: 'RO' },
{ nombre: 'Russian Federation (the)', abreviatura: 'RU' },
{ nombre: 'Rwanda', abreviatura: 'RW' },
{ nombre: 'Réunion', abreviatura: 'RE' },
{ nombre: 'Saint Barthélemy', abreviatura: 'BL' },
{ nombre: 'Saint Helena, Ascension and Tristan da Cunha', abreviatura: 'SH' },
{ nombre: 'Saint Kitts and Nevis', abreviatura: 'KN' },
{ nombre: 'Saint Lucia', abreviatura: 'LC' },
{ nombre: 'Saint Martin (French part)', abreviatura: 'MF' },
{ nombre: 'Saint Pierre and Miquelon', abreviatura: 'PM' },
{ nombre: 'Saint Vincent and the Grenadines', abreviatura: 'VC' },
{ nombre: 'Samoa', abreviatura: 'WS' },
{ nombre: 'San Marino', abreviatura: 'SM' },
{ nombre: 'Sao Tome and Principe', abreviatura: 'ST' },
{ nombre: 'Saudi Arabia', abreviatura: 'SA' },
{ nombre: 'Senegal', abreviatura: 'SN' },
{ nombre: 'Serbia', abreviatura: 'RS' },
{ nombre: 'Seychelles', abreviatura: 'SC' },
{ nombre: 'Sierra Leone', abreviatura: 'SL' },
{ nombre: 'Singapore', abreviatura: 'SG' },
{ nombre: 'Sint Maarten (Dutch part)', abreviatura: 'SX' },
{ nombre: 'Slovakia', abreviatura: 'SK' },
{ nombre: 'Slovenia', abreviatura: 'SI' },
{ nombre: 'Solomon Islands', abreviatura: 'SB' },
{ nombre: 'Somalia', abreviatura: 'SO' },
{ nombre: 'South Africa', abreviatura: 'ZA' },
{ nombre: 'South Georgia and the South Sandwich Islands', abreviatura: 'GS' },
{ nombre: 'South Sudan', abreviatura: 'SS' },
{ nombre: 'Spain', abreviatura: 'ES' },
{ nombre: 'Sri Lanka', abreviatura: 'LK' },
{ nombre: 'Sudan (the)', abreviatura: 'SD' },
{ nombre: 'Suriname', abreviatura: 'SR' },
{ nombre: 'Svalbard and Jan Mayen', abreviatura: 'SJ' },
{ nombre: 'Sweden', abreviatura: 'SE' },
{ nombre: 'Switzerland', abreviatura: 'CH' },
{ nombre: 'Syrian Arab Republic (the)', abreviatura: 'SY' },
{ nombre: 'Taiwan (Province of China)', abreviatura: 'TW' },
{ nombre: 'Tajikistan', abreviatura: 'TJ' },
{ nombre: 'Tanzania, the United Republic of', abreviatura: 'TZ' },
{ nombre: 'Thailand', abreviatura: 'TH' },
{ nombre: 'Timor-Leste', abreviatura: 'TL' },
{ nombre: 'Togo', abreviatura: 'TG' },
{ nombre: 'Tokelau', abreviatura: 'TK' },
{ nombre: 'Tonga', abreviatura: 'TO' },
{ nombre: 'Trinidad and Tobago', abreviatura: 'TT' },
{ nombre: 'Tunisia', abreviatura: 'TN' },
{ nombre: 'Turkmenistan', abreviatura: 'TM' },
{ nombre: 'Turks and Caicos Islands (the)', abreviatura: 'TC' },
{ nombre: 'Tuvalu', abreviatura: 'TV' },
{ nombre: 'Türkiye', abreviatura: 'TR' },
{ nombre: 'Uganda', abreviatura: 'UG' },
{ nombre: 'Ukraine', abreviatura: 'UA' },
{ nombre: 'United Arab Emirates (the)', abreviatura: 'AE' },
{ nombre: 'United Kingdom of Great Britain and Northern Ireland (the)', abreviatura: 'GB' },
{ nombre: 'United States Minor Outlying Islands (the)', abreviatura: 'UM' },
{ nombre: 'United States of America (the)', abreviatura: 'US' },
{ nombre: 'Uruguay', abreviatura: 'UY' },
{ nombre: 'Uzbekistan', abreviatura: 'UZ' },
{ nombre: 'Vanuatu', abreviatura: 'VU' },
{ nombre: 'Venezuela (Bolivarian Republic of)', abreviatura: 'VE' },
{ nombre: 'Viet Nam', abreviatura: 'VN' },
{ nombre: 'Virgin Islands (British)', abreviatura: 'VG' },
{ nombre: 'Virgin Islands (U.S.)', abreviatura: 'VI' },
{ nombre: 'Wallis and Futuna', abreviatura: 'WF' },
{ nombre: 'Western Sahara*', abreviatura: 'EH' },
{ nombre: 'Yemen', abreviatura: 'YE' },
{ nombre: 'Zambia', abreviatura: 'ZM' },
{ nombre: 'Zimbabwe', abreviatura: 'ZW' }
  ];

  searchPaises(term: string): Observable<string[]> {
    term = term.toLowerCase();
    const suggestions = this.paises
      .filter(pais => pais.nombre.toLowerCase().includes(term))
      .map(pais => pais.nombre);
    return of(suggestions);
  }

  /*metodos agregado para ser utilizado por el mapa - 09-11*/
  getPaisPorAbreviatura(abreviatura: string):string{
    console.log(`Abreviatura que llega al metodo: ${abreviatura}`);
    switch(abreviatura){
      
      case 'AR':
        return "Argentina";
      case 'BR':
        return "Brasil";
      case 'BO':
        return "Bolivia";
        default:
          //return "NO ENCONTRADO";
          return '';
    }
  }
  

}
