/**
 * Created by heungseok2 on 2017-08-28.
 */


function initUI(){
    // set checkboxes as true;
    $('input.cb_network[type=checkbox]').each(function(){
        this.checked = true;
    });
}


// ************** Control d3 ***************** //
function control_network_component(item) {
/*
    var id = item.innerText.replace(" ","").toLowerCase();
    console.log(id);
    var cb_element = $('input.cb_network[type=checkbox][value='+ id +']');
    if(cb_element.prop('checked')){
        // console.log("in checked");
        cb_element.prop('checked', false);
        $("#"+id).css("display", "none");
    }else{
        cb_element.prop('checked', true);
        $("#"+id).css("display", "");
    }*/

    if (item.checked){
        document.getElementById(item.value).style.display = null;
    }else{
        document.getElementById(item.value).style.display = "none";
    }
}

function cb_mouseOver(item) {
    var id = item.innerText.replace(" ","");
    $("#"+id).css("display", "");
}
function cb_mouseOut(item) {
    var id = item.innerText.replace(" ","");

    if($('input.cb_network[type=checkbox][value='+ id +']').prop('checked') == false){
        $("#"+id).css("display", "none");
    }

}

function control_layout(item){
    // var target_layout = item.innerText.replace(" ","");
    var target_layout = item.className;

    changeLayout(target_layout);
    setTimeout(function(){ changeOthers(); }, 2000);

}


function control_nodeSize(item){
    var target_size = item.className;
    changeNodeSize(target_size);

}
function control_nodeColor(item){
    var target_color = item.className;
    changeNodeColor(target_color);

}

function control_panelPlot(item){
    console.log(item.className);
    console.log(item.type);
    var target_mode = item.className.split(" ")[0];
    if(item.type == "x"){
        if(plot_x_mode != target_mode){
            $("ul.sidePlot>li."+plot_x_mode+".x_axis").removeClass("active");
            plot_x_mode = target_mode;
            updateSidePanelPlot();
            $("ul.sidePlot>li."+plot_x_mode+".x_axis").addClass("active");
        }
    }else{
        if(plot_y_mode != target_mode){
            $("ul.sidePlot>li."+plot_y_mode+".y_axis").removeClass("active");
            plot_y_mode = target_mode;
            updateSidePanelPlot();
            $("ul.sidePlot>li."+plot_y_mode+".y_axis").addClass("active");
        }
    }

}






// **************** Modal UI **************** //
// get the modal
var modal = document.getElementById("aboutModal");
// get the button that opens the modal
var btn = document.getElementById("about");
// get the <span> element that cloases the modal;
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}
