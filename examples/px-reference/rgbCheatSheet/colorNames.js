var namedColors = {
    "IndianRed" : 0xCD5C5Cff,
    "LightCoral" : 0xF08080ff,
    "Salmon" : 0xFA8072ff,
    "DarkSalmon" : 0xE9967Aff,
    "LightSalmon" : 0xFFA07Aff,
    "Crimson" : 0xDC143Cff,
    "Red" : 0xFF0000ff,
    "FireBrick" : 0xB22222ff,
    "DarkRed" : 0x8B0000ff,
    "Pink" : 0xFFC0CBff,
    "LightPink" : 0xFFB6C1ff,
    "HotPink" : 0xFF69B4ff,
    "DeepPink" : 0xFF1493ff,
    "MediumVioletRed" : 0xC71585ff,
    "PaleVioletRed" : 0xDB7093ff,
    "Coral" : 0xFF7F50ff,
    "Tomato" : 0xFF6347ff,
    "OrangeRed" : 0xFF4500ff,
    "DarkOrange" : 0xFF8C00ff,
    "Orange" : 0xFFA500ff,
    "Gold" : 0xFFD700ff,
    "Yellow" : 0xFFFF00ff,
    "LightYellow" : 0xFFFFE0ff,
    "LemonChiffon" : 0xFFFACDff,
    "LightGoldenrodYellow" : 0xFAFAD2ff,
    "PapayaWhip" : 0xFFEFD5ff,
    "Moccasin" : 0xFFE4B5ff,
    "PeachPuff" : 0xFFDAB9ff,
    "PaleGoldenrod" : 0xEEE8AAff,
    "Khaki" : 0xF0E68Cff,
    "DarkKhaki" : 0xBDB76Bff,
    "Lavender" : 0xE6E6FAff,
    "Thistle" : 0xD8BFD8ff,
    "Plum" : 0xDDA0DDff,
    "Violet" : 0xEE82EEff,
    "Orchid" : 0xDA70D6ff,
    "Fuchsia" : 0xFF00FFff,
    "Magenta" : 0xFF00FFff,
    "MediumOrchid" : 0xBA55D3ff,
    "MediumPurple" : 0x9370DBff,
    "BlueViolet" : 0x8A2BE2ff,
    "DarkViolet" : 0x9400D3ff,
    "DarkOrchid" : 0x9932CCff,
    "DarkMagenta" : 0x8B008Bff,
    "Purple" : 0x800080ff,
    "RebeccaPurple" : 0x663399ff,
    "Indigo" : 0x4B0082ff,
    "MediumSlateBlue" : 0x7B68EEff,
    "SlateBlue" : 0x6A5ACDff,
    "DarkSlateBlue" : 0x483D8Bff,
    "GreenYellow" : 0xADFF2Fff,
    "Chartreuse" : 0x7FFF00ff,
    "LawnGreen" : 0x7CFC00ff,
    "Lime" : 0x00FF00ff,
    "LimeGreen" : 0x32CD32ff,
    "PaleGreen" : 0x98FB98ff,
    "LightGreen" : 0x90EE90ff,
    "MediumSpringGreen" : 0x00FA9Aff,
    "SpringGreen" : 0x00FF7Fff,
    "MediumSeaGreen" : 0x3CB371ff,
    "SeaGreen" : 0x2E8B57ff,
    "ForestGreen" : 0x228B22ff,
    "Green" : 0x008000ff,
    "DarkGreen" : 0x006400ff,
    "YellowGreen" : 0x9ACD32ff,
    "OliveDrab" : 0x6B8E23ff,
    "Olive" : 0x808000ff,
    "DarkOliveGreen" : 0x556B2Fff,
    "MediumAquamarine" : 0x66CDAAff,
    "DarkSeaGreen" : 0x8FBC8Fff,
    "LightSeaGreen" : 0x20B2AAff,
    "DarkCyan" : 0x008B8Bff,
    "Teal" : 0x008080ff,
    "Aqua" : 0x00FFFFff,
    "Cyan" : 0x00FFFFff,
    "LightCyan" : 0xE0FFFFff,
    "PaleTurquoise" : 0xAFEEEEff,
    "Aquamarine" : 0x7FFFD4ff,
    "Turquoise" : 0x40E0D0ff,
    "MediumTurquoise" : 0x48D1CCff,
    "DarkTurquoise" : 0x00CED1ff,
    "CadetBlue" : 0x5F9EA0ff,
    "SteelBlue" : 0x4682B4ff,
    "LightSteelBlue" : 0xB0C4DEff,
    "PowderBlue" : 0xB0E0E6ff,
    "LightBlue" : 0xADD8E6ff,
    "SkyBlue" : 0x87CEEBff,
    "LightSkyBlue" : 0x87CEFAff,
    "DeepSkyBlue" : 0x00BFFFff,
    "DodgerBlue" : 0x1E90FFff,
    "CornflowerBlue" : 0x6495EDff,
    "RoyalBlue" : 0x4169E1ff,
    "Blue" : 0x0000FFff,
    "MediumBlue" : 0x0000CDff,
    "DarkBlue" : 0x00008Bff,
    "Navy" : 0x000080ff,
    "MidnightBlue" : 0x191970ff,
    "Cornsilk" : 0xFFF8DCff,
    "BlanchedAlmond" : 0xFFEBCDff,
    "Bisque" : 0xFFE4C4ff,
    "NavajoWhite" : 0xFFDEADff,
    "Wheat" : 0xF5DEB3ff,
    "BurlyWood" : 0xDEB887ff,
    "Tan" : 0xD2B48Cff,
    "RosyBrown" : 0xBC8F8Fff,
    "SandyBrown" : 0xF4A460ff,
    "Goldenrod" : 0xDAA520ff,
    "DarkGoldenrod" : 0xB8860Bff,
    "Peru" : 0xCD853Fff,
    "Chocolate" : 0xD2691Eff,
    "SaddleBrown" : 0x8B4513ff,
    "Sienna" : 0xA0522Dff,
    "Brown" : 0xA52A2Aff,
    "Maroon" : 0x800000ff,
    "White" : 0xFFFFFFff,
    "Snow" : 0xFFFAFAff,
    "Honeydew" : 0xF0FFF0ff,
    "MintCream" : 0xF5FFFAff,
    "Azure" : 0xF0FFFFff,
    "AliceBlue" : 0xF0F8FFff,
    "GhostWhite" : 0xF8F8FFff,
    "WhiteSmoke" : 0xF5F5F5ff,
    "Seashell" : 0xFFF5EEff,
    "Beige" : 0xF5F5DCff,
    "OldLace" : 0xFDF5E6ff,
    "FloralWhite" : 0xFFFAF0ff,
    "Ivory" : 0xFFFFF0ff,
    "AntiqueWhite" : 0xFAEBD7ff,
    "Linen" : 0xFAF0E6ff,
    "LavenderBlush" : 0xFFF0F5ff,
    "MistyRose" : 0xFFE4E1ff,
    "Gainsboro" : 0xDCDCDCff,
    "LightGray" : 0xD3D3D3ff,
    "LightGrey" : 0xD3D3D3ff,
    "Silver" : 0xC0C0C0ff,
    "DarkGray" : 0xA9A9A9ff,
    "DarkGrey" : 0xA9A9A9ff,
    "Gray" : 0x808080ff,
    "Grey" : 0x808080ff,
    "DimGray" : 0x696969ff,
    "DimGrey" : 0x696969ff,
    "LightSlateGray" : 0x778899ff,
    "LightSlateGrey" : 0x778899ff,
    "SlateGray" : 0x708090ff,
    "SlateGrey" : 0x708090ff,
    "DarkSlateGray" : 0x2F4F4Fff,
    "DarkSlateGrey" : 0x2F4F4Fff,
    "Black" : 0x000000ff
}; 


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

namedColors.Keys = function()
{
    var all_keys = Object.keys(this);

    return all_keys;
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

namedColors.name = function(key)
{
  var all_keys = Object.keys(this);

  for(var k in all_keys)
  {
    if( this[all_keys[k]] == key)
    {
      return all_keys[k];
    }
  }
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

module.exports = namedColors;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

