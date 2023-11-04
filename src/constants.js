import { rdData } from "./rdData"

export const apiUrl = 'https://congapi.178765.xyz'

export const categories = [
    { id: 1, abr: 'AGR', name: 'Agriculture', icon: `/category_icons/agriculture.png` },
    { id: 2, abr: 'AAT', name: 'Automotive and Transportation', icon: `/category_icons/automotive.png` },
    { id: 3, abr: 'BAC', name: 'Building and Construction', icon: `/category_icons/construction.png` },
    { id: 4, abr: 'CAM', name: 'Chemicals And Materials', icon: `/category_icons/experiment.png` },
    { id: 5, abr: 'CGS', name: 'Consumer Goods', icon: `/category_icons/box.png` },
    { id: 6, abr: 'AAD', name: 'Aerospace & Defense', icon: `/category_icons/defense.png` },
    { id: 7, abr: 'EAS', name: 'Electronics and Semiconductors', icon: `/category_icons/electronics.png` },
    { id: 8, abr: 'ENR', name: 'Energy and Natural Resources', icon: `/category_icons/tools.png` },
    { id: 9, abr: 'FAB', name: 'Food and Beverages', icon: `/category_icons/carrot.png` },
    { id: 10, abr: 'HLS', name: 'Healthcare and Life Sciences', icon: `/category_icons/cross.png` },
    { id: 11, abr: 'HEG', name: 'Heavy Engineering', icon: `/category_icons/automation.png` },
    { id: 12, abr: 'IAT', name: 'IT and Telecom', icon: `/category_icons/telecom.png` },
    { id: 13, abr: 'PAC', name: 'Packaging', icon: `/category_icons/packaging.png` },
    { id: 14, abr: 'PHR', name: 'Pharmaceutical', icon: `/category_icons/patient.png` },
]

export const reCaptchaKey = '6Ldr4ucoAAAAAKwW2FX-bCJIo6YHztxzf97Y_Tl8'

export const licenses = [
    {
        id: 1,
        license: 'Single User License',
        price: '$4650'
    },
    {
        id: 2,
        license: 'Enterprise User License',
        price: '$6450'
    },
    {
        id: 3,
        license: 'Excel Datasheet',
        price: '$2325'
    },
]

export const report = {
    id: 1,
    title: 'Duvet Market Size, Trends, Share, Growth, and Opportunity Forecast, 2023 - 2030 Global Industry Analysis By Material Type (Natural, and Synthetic), By Bed Type (Single Bed, Double Bed, Queen Size, and King Size), By End-use (Residential, and Commercial (Hotels, Hospitals, Others)), By Sales Channel (Independent Small Stores, Specialty Stores, Online Retailing, and Others) and By Geography (North America, Europe, Asia Pacific, South America, and Middle East & Africa)',
    category: 'Consumer Goods',
    date: 'September 2023',
    pages: '250',
    description: rdData,
    toc: 'Table of Content',
    hightlights: 'Hightlights',
    methodology: 'Methodology',
}

export const constConfig =
{
    zIndex: 0,
    readonly: false,
	processPasteFromWord: true,
    activeButtonsInReadOnly: ['source', 'fullsize', 'print', 'about', 'dots'],
    toolbarButtonSize: 'middle',
    theme: 'default',
    saveModeInCookie: false,
    spellcheck: true,
    editorCssClass: false,
    triggerChangeEvent: true,
    width: 'auto',
    height: 'auto',
    minHeight: 300,
    toolbarInline: true,
    toolbarInlineForSelection: true,
    toolbarInlineDisableFor: [],
    toolbarInlineDisabledButtons: ['source'],
    direction: '',
    language: 'auto',
    debugLanguage: false,
    i18n: 'en',
    tabIndex: -1,
    toolbar: false,
    inlinePopup: true,
    enter: "P",
    useSplitMode: false,
    colors: {
        greyscale: ['#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF'],
        palette: ['#980000', '#FF0000', '#FF9900', '#FFFF00', '#00F0F0', '#00FFFF', '#4A86E8', '#0000FF', '#9900FF', '#FF00FF'],
        full: [
            '#E6B8AF', '#F4CCCC', '#FCE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E3', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC',
            '#DD7E6B', '#EA9999', '#F9CB9C', '#FFE599', '#B6D7A8', '#A2C4C9', '#A4C2F4', '#9FC5E8', '#B4A7D6', '#D5A6BD',
            '#CC4125', '#E06666', '#F6B26B', '#FFD966', '#93C47D', '#76A5AF', '#6D9EEB', '#6FA8DC', '#8E7CC3', '#C27BA0',
            '#A61C00', '#CC0000', '#E69138', '#F1C232', '#6AA84F', '#45818E', '#3C78D8', '#3D85C6', '#674EA7', '#A64D79',
            '#85200C', '#990000', '#B45F06', '#BF9000', '#38761D', '#134F5C', '#1155CC', '#0B5394', '#351C75', '#733554',
            '#5B0F00', '#660000', '#783F04', '#7F6000', '#274E13', '#0C343D', '#1C4587', '#073763', '#20124D', '#4C1130'
        ]
    },
    colorPickerDefaultTab: 'background',
    // imageDefaultWidth: 300,
    removeButtons: [],
    disablePlugins: [],
    extraButtons: [],
    sizeLG: 900,
    sizeMD: 700,
    sizeSM: 400,
    sizeSM: 400,
    buttons: [
        'source', '|',
        'bold',
        'strikethrough',
        'underline',
        'italic', '|',
        'ul',
        'ol', '|',
        'outdent', 'indent', '|',
        'font',
        'fontsize',
        'brush',
        'paragraph', '|',
        'image',
        'video',
        'table',
        'link', '|',
        'align', 'undo', 'redo', '|',
        'hr',
        'eraser',
        'copyformat', '|',
        'symbol',
        'fullsize',
        'print',
        'about'
    ],
    buttonsXS: [
        'bold',
        'image', '|',
        'brush',
        'paragraph', '|',
        'align', '|',
        'undo', 'redo', '|',
        'eraser',
        'dots'
    ],
    events: {},
    textIcons: false,
    // uploader: { 'insertImageAsBase64URI': true },
    askBeforePasteFromWord: false,
    hotkeys: {
        redo: 'ctrl+z',
        undo: 'ctrl+y,ctrl+shift+z',
        indent: 'ctrl+]',
        outdent: 'ctrl+[',
        bold: 'ctrl+b',
        italic: 'ctrl+i',
        removeFormat: 'ctrl+shift+m',
        insertOrderedList: 'ctrl+shift+7',
        insertUnorderedList: 'ctrl+shift+8',
        openSearchDialog: 'ctrl+f',
        openReplaceDialog: 'ctrl+r'
    }
}