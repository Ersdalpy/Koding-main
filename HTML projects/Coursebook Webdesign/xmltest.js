/* stockNode = xmldoc.documentElement;
nodeList = lagerNode.childNodes;
itemNode = nodeList(i);
articleNode = artcileNode.firstChild;
DesignationNode = ItemNode.nextSibling;
ColorNode = LabelNode.nextSibling;
PriceNode = ColorNode.nextSibling;
StockNode = PriceNode.nextSibling;

for (var i = 0 ; i < nodeList.length ; i++){
    if (stockNode.childNodes(i).firstChild.firstChild.nodeValue == Itemnumber)
}
found = i;

function SearchArticles(Itemnumber){
    var xmldoc, StockNode, ItemNumberNode, DesignationNode;
    var ColorNode, PriceNode, StockNode;
    var found, nodeList
    xmldoc = new ActiveXObject("Msxml2.DOMDocument.6.0");
    xmldoc.load("stockdata.xml");
    StockNode = xmldoc.documentElement;
    NodeList = StockNode.childNodes;
    for (var = 0; i < NodeList.length ; i++){
        if (StockNode.childNodes(i).firstChild.firstChild.nodeValue == Itemnumber.)
    }
        found = i;
        ItemNode = StockNode.childNodes(found);
        ItemNumberNode = ItemNode.firstChild;
        DesignationNode = ItemNumberNode.nextSibling;
        ColorNode = DesignationNode.nextSibling;
        PriceNode = ColorNode.nextSibling;
        InventoryNode = PriceNode.nextSibling;
} */

var stockNode, nodeList, itemNode, articleNode, DesignationNode, ColorNode, PriceNode, StockNode;
var sumVar, found;

// Assuming you want to loop through nodeList using i
for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i].firstChild.firstChild.nodeValue == Itemnumber) {
        found = i;
        break; // If the item is found, you can exit the loop
    }
}

function SearchArticles(Itemnumber) {
    var xmldoc, StockNode, ItemNode, ItemNumberNode, DesignationNode, ColorNode, PriceNode, InventoryNode;
    var found, nodeList;

    xmldoc = new ActiveXObject("Msxml2.DOMDocument.6.0");
    xmldoc.load("stockdata.xml");
    StockNode = xmldoc.documentElement;
    nodeList = StockNode.childNodes;

    for (var i = 0; i < nodeList.length; i++) {
        if (StockNode.childNodes[i].firstChild.firstChild.nodeValue == Itemnumber) {
            found = i;
            break; // If the item is found, you can exit the loop
        }
    }

    ItemNode = StockNode.childNodes[found];
    ItemNumberNode = ItemNode.firstChild;
    DesignationNode = ItemNumberNode.nextSibling;
    ColorNode = DesignationNode.nextSibling;
    PriceNode = ColorNode.nextSibling;
    InventoryNode = PriceNode.nextSibling;
}
