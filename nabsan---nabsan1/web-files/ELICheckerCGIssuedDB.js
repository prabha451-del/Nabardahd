var loggedInUserId = '';
var loggedInUserName = '';
var loggedInUserEmail = '';
$(document).ready(function () {
loggedInUserId = $('#fpo-user-contact-id').val();
loggedInUserName = $('#fpo-user-contact-name').val();
loggedInUserEmail = $('#fpo-user-email').val();
Navigation();
UTRMaster();
SOEMaster();
TaxInvoicesGet();
// Dashboard();
EliMasterData(loggedInUserEmail);

}); 

   var TotalperEMployee='';
var LoginName='';
 function GetParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function Navigation() {
    var queryList = "";
    //queryList = location.origin+"/_api/cr6fc_menumasters?$select=cr6fc_link,cr6fc_name,statecode,cr6fc_role,cr6fc_order&$filter=statecode eq 0  and cr6fc_role eq 1&$orderby=cr6fc_order asc&$top=5000";
	queryList = location.origin +"/_api/cr6fc_menumasters?$select=cr6fc_link,cr6fc_name,statecode,cr6fc_role,cr6fc_order&$filter=statecode eq 0  and cr6fc_rule eq 1&$orderby=cr6fc_order asc&$top=5000";
    var requestHeaders = { "accept": "application/json;odata=verbose" };
    $.ajax({
        url: queryList,
        type: "GET",
        async: false,
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        },
        success: function onSuccess(data) {
            try {
                var Loggs = data.value;
                if (Loggs.length > 0) {
                    var vHTML = '';
                    for (var i = 0; i < Loggs.length; i++) {
                      //  vHTML += "<li class='nav-item'><a class='nav-link' href='" + Loggs[i].cr6fc_link + "'>" + Loggs[i].cr6fc_name + "</a></li>"
						 vHTML += "<li class='nav-item'><a class='nav-link' href='" + Loggs[i].cr6fc_link + "'>" + Loggs[i].cr6fc_name + "</a></li>"
                    }
                    if (vHTML != '' && vHTML != null && vHTML != undefined) {
                        document.getElementById("Navdiv").innerHTML = vHTML;
                        //$('#leftnavigation').text(vHTML);
                    }

                }
            }
            catch (e) {
                console.log(e);
            }

        },
        error: function onError(error) {
            console.log(JSON.stringify(error));
        }
    });


}
function SubmitData(){

window.location.href="";

}
function OpenXL(){
window.location.href="";

}
  
  

var UTRColl;
function UTRMaster() {
    //var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('UTRDetails')//items?$top=5000&$select=*,CGID&$orderby=ID desc";
	//var requestUri = location.origin + "/_api/cr6fc_renewalutrdetailses?$select=cr6fc_cgid,cr6fc_paymentreceiveddate&$top=5000";
	var requestUri = location.origin +"/_api/cr6fc_renewalutrdetailses?$select=cr6fc_cgid,cr6fc_paymentreceiveddate&$top=5000";    
		    $.ajax({
		        url: requestUri,
                type: "GET",
                async: false,
                headers: {
                "accept": "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose"
                },
		        success: function (data) {
		            UTRColl = data.value;
		        },
		        error: function () {
		            console.log("error");
		        }
		    });
}

var SOEColl;
function SOEMaster() {
    //var requestUri = location.origin + "/_api/cr6fc_renewalsoedetailses?$select=cr6fc_wfid,cr6fc_eligibleguranteecover&$top=5000";
	var requestUri = location.origin +"/_api/cr6fc_renewalsoedetailses?$select=cr6fc_wfid,cr6fc_eligibleguranteecover&$top=5000";
		    var requestHeaders = { "accept": "application/json;odata=verbose" };
		    $.ajax({
		        url: requestUri,
                type: "GET",
                async: false,
                headers: {
                "accept": "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose"
                },
		        success: function (data) {
		            SOEColl = data.value;
		        },
		        error: function () {
		            console.log("error");
		        }
		    });
}

var TaxInvoicesColl;
function TaxInvoicesGet() {
	//var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('TaxInvoices')//items?$top=5000&$select=*&$orderby=ID desc";
	//var requestUri = location.origin + "/_api/cr6fc_renewaltaxinvoices?$select=cr6fc_cgid,cr6fc_cgpan&$top=5000";
	var requestUri = location.origin + "/_api/cr6fc_renewaltaxinvoices?$select=cr6fc_cgid,cr6fc_cgpan&$top=5000";
			//var requestHeaders = { "accept": "application/json;odata=verbose" };
			$.ajax({
				url: requestUri,
				type: "GET",
				async: false,
				headers: {
				"accept": "application/json;odata=verbose",
				"content-type": "application/json;odata=verbose"
				},
				success: function (data) {
					TaxInvoicesColl = data.value;
				},
				error: function () {
					console.log("error");
				}
			});
}
var nameEliInstitute;
const EliMasterData = (loggedInUserEmail) =>{
	//let URL = location.origin+"/_api/cr6fc_elimasters?$select=cr6fc_lendinginstitute,cr6fc_elicheckeremailid&$filter= cr6fc_elicheckeremailid eq '"+loggedInUserEmail+"'";
	let URL = location.origin+"/_api/cr6fc_elimasters?$select=cr6fc_lendinginstitute,cr6fc_elicheckeremailid&$filter= cr6fc_elicheckeremailid eq '"+loggedInUserEmail+"'";
		   $.ajax({
			   url: URL,
			   type: "GET",
			   async: false,
			   headers: {
				   "accept": "application/json;odata=verbose",
				   "content-type": "application/json;odata=verbose"
			   },
			   success: function (data) {
				   Loggmakerrequestdata = data.value;
				   if (Loggmakerrequestdata.length > 0) {
					   for(var a =0;a<Loggmakerrequestdata.length;a++){
						  // nameEliInstitute = Loggmakerrequestdata[0].cr6fc_lendinginstitute;
						   nameEliInstitute = Loggmakerrequestdata[0].cr6fc_lendinginstitute;
					   }
					   Dashboard(nameEliInstitute);
				   }
				   else{
						  alert("Log in id is not a Eli Maker");
						  return false;
				   }
				   
			   },
			   error: function () {
				   console.log("error");
			   }
		   });
   }
var CGPANNo='';
function Dashboard(nameEliInstitute){
    var queryList = "";

 //queryList = _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/GetByTitle('RenewalCGApplication')/Items?$select=*&$filter=ELICheckerId eq '"+LoginName+"' and (Status eq 'Guarantee Issued')&$top=5000&$orderby=ID desc"; 
 //queryList = location.origin + "/_api/cr6fc_renewalcgapplications?$select=cr6fc_status,cr6fc_nameoflendinginstitution,cr6fc_renewalcgapplicationid,cr6fc_cgstatus,cr6fc_cgpan,cr6fc_nameoffpo,cr6fc_cgstatus,cr6fc_guaranteestartdate&$filter=cr6fc_nameoflendinginstitution eq '" + nameEliInstitute + "' and (cr6fc_status eq 15)&$top=5000";
queryList = location.origin +"/_api/cr6fc_renewalcgapplications?$select=cr6fc_status,cr6fc_nameoflendinginstitution,cr6fc_renewalcgapplicationid,cr6fc_cgstatus,cr6fc_cgpan,cr6fc_nameoffpo,cr6fc_cgstatus,cr6fc_guaranteestartdate&$filter=cr6fc_nameoflendinginstitution eq '" + nameEliInstitute + "' and (cr6fc_status eq 15)&$top=5000";
   var requestHeaders = { "accept": "application/json;odata=verbose" };

   $.ajax({
	url: queryList,
	type: "GET",
	async: false,
	headers: {
	"accept": "application/json;odata=verbose",
	"content-type": "application/json;odata=verbose"
	},
	success: function (data)
	{
	
		
		try
		{
			  var Loggs= data.value;
              var vHTML=''; 
             var vURLEdit1 ='';
                  for(var i=0;i<Loggs.length; i++)
                    { 
                 var vURLView =location.origin + "/ViewRenewalCGIssued/?Item="+Loggs[i].cr6fc_renewalcgapplicationid+"&Page=ELICheckerCGPay";
				 var vURLViewrenewed = location.origin + "/ViewformRenewal/?Item="+Loggs[i].cr6fc_renewalcgapplicationid+"";

				  var Status = Loggs[i]['cr6fc_status@OData.Community.Display.V1.FormattedValue'];
				  				  var vURLEdit ="/sites/FPOCGPortalUAT/SitePages/CGFeePaymentViewForm.aspx?Item="+Loggs[i].cr6fc_renewalcgapplicationid;

                  if(Status == "Pending For Approval" ){
				   var vURLEdit ="/sites/FPOCGPortalUAT/SitePages/CGFeePaymentViewForm.aspx?Item="+Loggs[i].cr6fc_renewalcgapplicationid;
                  	vURLEdit1 =	"<a href='"+vURLEdit+"' target='_blank' style='margin:0;Padding:0;'><i class='fa fa-pencil' aria-hidden='true'></i></a>"
                  }
                  else if(Status == "Payment Inititated by ELI")
                  {
                  	var vURLEdit ="/sites/FPOCGPortalUAT/SitePages/ELICheckerUTRApproverForm.aspx?Item="+Loggs[i].ID;
                  	vURLEdit1 =	"<a href='"+vURLEdit+"' target='_blank' style='margin:0;Padding:0;'><i class='fa fa-pencil' aria-hidden='true'></i></a>"
                  }
                  else{
                        vURLEdit1 ="";
                  }
                  
                   var filterUTRData = $.grep(UTRColl, function (value) 
				    {
				        return (value.cr6fc_cgid == Loggs[i].cr6fc_renewalcgapplicationid);
				    });
				    
				     //var SoENo='';
				    var UTRDate='';
				    //var SOECGFee='';
					if(filterUTRData.length>0)
					{
						//SoENo=filterSOEData[0].Title;
						UTRDate=GetCreatedDateTime(filterUTRData[0].cr6fc_paymentreceiveddate);
						//SOECGFee=filterSOEData[0].CreditGuaranteeFee;
					}
					
					 var filterSOEData = $.grep(SOEColl, function (value) 
				    {
				        return (value.cr6fc_wfid == Loggs[i].cr6fc_renewalcgapplicationid);
				    });
					var UTREligible;
				    if(filterSOEData.length>0)
					{
						//SoENo=filterSOEData[0].Title;
						UTREligible=filterSOEData[0].cr6fc_eligibleguranteecover;
						//SOECGFee=filterSOEData[0].CreditGuaranteeFee;
					}

					
                   var filterTaxData = $.grep(TaxInvoicesColl, function (value) 
				    {
				        return (value.cr6fc_cgid == Loggs[i].cr6fc_renewalcgapplicationid);
				    });				    
				    if(filterTaxData.length>0)
				    {
				    	CGPANNo=filterTaxData[0].cr6fc_cgpan;
				    }
				    
				    var vStatus='';
					if(Loggs[i]['cr6fc_status@OData.Community.Display.V1.FormattedValue'] =="Guarantee Issued")
					{
						vStatus="Guarantee Renewed"
					}
					else
					{
						vStatus=Loggs[i]['cr6fc_status@OData.Community.Display.V1.FormattedValue'];
					}


                    vHTML += "<tr style='line-height: 16px;'>"+	
	      				
							"<td style='text-align:center'>"+CGPANNo+"</td>"+
						    //"<td style='text-align:center'>"+GetCreatedDateTime(Loggs[i].Created)+"</td>"+
					        "<td style='text-align:center'>"+Loggs[i].cr6fc_nameoffpo+"</td>"+
					        //"<td style='text-align:center'>"+GetCreatedDate(Loggs[i].JoiningDate)+"</td>"+
							//"<td style='text-align:center'>"+Loggs[i].CGPAN+"</td>"+
							"<td style='text-align:center'>"+UTREligible+"</td>"+
							"<td style='text-align:center'>"+GetCreatedDateTime(Loggs[i].cr6fc_guaranteestartdate)+"</td>"+
							"<td style='text-align:center'>"+Loggs[i]['cr6fc_cgstatus@OData.Community.Display.V1.FormattedValue']+"</td>"+
							"<td style='text-align:center'>"+vStatus+"</td>"+
						   "<td style='text-align:center; margin:0; padding:0;'>"+vURLEdit1+"<a href='"+vURLView+"' target='_blank' style='margin:0;Padding:0;'><i class='fa fa-bars' aria-hidden='true'></i></a></td>"+
						   "<td style='text-align:center; margin:0; padding:0;'><a href='"+vURLViewrenewed+"' target='_blank' style='margin:0;Padding:0;'><i class='fa fa-bars' aria-hidden='true'></i></a></td>"+
							"<td style='text-align:center; display:none;'>"+Loggs[i].cr6fc_renewalcgapplicationid+"</td>"+
					
							"</tr>";						
                    }
                    
                    if(vHTML != "")
                    {   
                        $('#tblDataMain').DataTable().clear();
                        $('#tblDataMain').DataTable().destroy();
                        document.getElementById("tbodyRequestor").innerHTML=vHTML;
                      	                  $('#tblDataMain').DataTable({ 
	                  "order": [[5,'dsc']],
	                   //scrollY: "300px",
                       // scrollX:  true,
                        // scrollCollapse: true,
                         paging:true,
                         "bSort": true,
       					 "bInfo": false,
						  "bFilter": true
						  			} );
														
															
                    }
                    else  
                    {
                        //vHTML ="<tr><td colspan='15'><font face='Calibri' size='2'>No Employee Addition Deletion</font></td></tr>"; 
                        vHTML ="<tr><td colspan='15'><font face='Calibri' size='2'>No CG Application</font></td></tr>";
                        document.getElementById("tbodyRequestor").innerHTML=vHTML;
                        $('#tblDataMain').dataTable();
                    }          
                
                    }
            catch (e) {       
            console.log(e);                        
            }
            //getData(PolicyNo);
        },
        error: function () {
            console.log("error");
        }
    });
}
function BindHomeDetails() {
debugger;
       var LoginName=_spPageContextInfo.userId; 
       var ddlStatus = document.getElementById("ddlStatus").value;
       if( ddlStatus == "Guarantee Renewed")
       {
       		ddlStatus = "Guarantee Issued";
       }
        var vHTML = "";
    var queryList = "";
       if ( ddlStatus !== "All" && ddlStatus !== "") {
        queryList = _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/GetByTitle('RenewalCGApplication')/Items?$select=*&$filter=(ELICheckerId eq '"+LoginName+"' and Status eq '"+ddlStatus+"' )&$top=5000"; 
          }
       else{
        queryList = _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/GetByTitle('RenewalCGApplication')/Items?$select=*&$filter=ELICheckerIdeq '"+LoginName+"'&$top=5000&$orderby=ID asc"; 

       }
    var requestHeaders = { "accept": "application/json;odata=verbose" };
    $.ajax({
        url: queryList,
        contentType: "application/json;odata=verbose",
        headers: requestHeaders,
        async: false,
        cache: false,
        success: function (data) 
        {    
          try
            {
                 var Loggs= data.d.results;
              var vHTML=''; 
              var vURLEdit1 = '';
                  for(var i=0;i<Loggs.length; i++)
                    { 
				  var vURLEdit ="/sites/FPOCGPortalUAT/SitePages/ELICheckerApprovalRenewalForm.aspx?Item="+Loggs[i].ID;
                  var vURLView ="/sites/FPOCGPortalUAT/SitePages/ELICheckerApprovalRenewalForm.aspx?Item="+Loggs[i].ID;
				  var Status = Loggs[i].Status;
				  
				  var vURLEdit ="/sites/FPOCGPortalUAT/SitePages/ELICheckerApprovalRenewalForm.aspx?Item="+Loggs[i].ID;

                  if(Status == "Pending For Approval" ){
				   var vURLEdit ="/sites/FPOCGPortalUAT/SitePages/ELICheckerApprovalRenewalForm.aspx?Item="+Loggs[i].ID;
                  	vURLEdit1 =	"<a href='"+vURLEdit+"' target='_blank' style='margin:0;Padding:0;'><i class='fa fa-pencil' aria-hidden='true'></i></a>"
                  }
                  else{
                        vURLEdit1 ="";
                  }
                  
                     var filterUTRData = $.grep(UTRColl, function (value) 
				    {
				        return (value.CGID == Loggs[i].Id);
				    });
				    
				     //var SoENo='';
				    var UTRDate='';
				    //var SOECGFee='';
					if(filterUTRData.length>0)
					{
						//SoENo=filterSOEData[0].Title;
						UTRDate=GetCreatedDateTime(filterUTRData[0].PaymentReceivedDate);
						//SOECGFee=filterSOEData[0].CreditGuaranteeFee;
					}
					
					 var filterSOEData = $.grep(SOEColl, function (value) 
				    {
				        return (value.WFID == Loggs[i].Id);
				    });
				    if(filterSOEData.length>0)
					{
						//SoENo=filterSOEData[0].Title;
						UTREligible=filterSOEData[0].EligibleGuranteeCover;
						//SOECGFee=filterSOEData[0].CreditGuaranteeFee;
					}

					if(Loggs[i].Status=="Guarantee Issued")
					{
						vStatus="Guarantee Renewed"
					}
					else
					{
						vStatus=Loggs[i].Status;
					}
					
                    vHTML += "<td style='text-align:center'>"+CGPANNo+"</td>"+
						    //"<td style='text-align:center'>"+GetCreatedDateTime(Loggs[i].Created)+"</td>"+
					        "<td style='text-align:center'>"+Loggs[i].NameOfFPO+"</td>"+
					        //"<td style='text-align:center'>"+GetCreatedDate(Loggs[i].JoiningDate)+"</td>"+
							//"<td style='text-align:center'>"+Loggs[i].CGPAN+"</td>"+
							"<td style='text-align:center'>"+UTREligible+"</td>"+
							"<td style='text-align:center'>"+GetCreatedDateTime(Loggs[i].GuaranteeStartDate)+"</td>"+
							"<td style='text-align:center'>"+Loggs[i].CGStatus+"</td>"+
							"<td style='text-align:center'>"+vStatus+"</td>"+							
						   "<td style='text-align:center; display:flex; margin:0; padding:0;'>"+vURLEdit1+"<a href='"+vURLView+"' target='_blank' style='margin:0;Padding:0;'><i class='fa fa-bars' aria-hidden='true'></i></a></td>"+
	      											
							"<td style='text-align:center; display:none;'>"+Loggs[i].ID+"</td>"+
					
							"</tr>";                    }
                    
                    if(vHTML != "")
                    {   
                        $('#tblDataMain').DataTable().clear();
                        $('#tblDataMain').DataTable().destroy();
                        document.getElementById("tbodyRequestor").innerHTML=vHTML;
                       $('#tblDataMain').DataTable({ 
	                  "order": [[5,'dsc']],
	                   scrollY: "300px",
                        scrollX:  true,
                         scrollCollapse: true,
                         paging:true,
                         "bSort": true,
       					 "bInfo": false,
						  "bFilter": true
						  			} );
														
															
                    }
                    else  
                    {
                        //vHTML ="<tr><td colspan='15'><font face='Calibri' size='2'>No Employee Addition Deletion</font></td></tr>"; 
                        vHTML ="<tr><td colspan='15'><font face='Calibri' size='2'>No CG Application</font></td></tr>"; 

                        document.getElementById("tbodyRequestor").innerHTML=vHTML;
                        $('#tblDataMain').dataTable();
                    }          
                
                    }
            catch (e) {       
            console.log(e);                        
            }
            //getData(PolicyNo);
        },
        error: function () {
            console.log("error");
        }
    });
}
function GetCreatedDateTime(vCreatedDate)
 {
	var vCreated=vCreatedDate;
	var today = new Date(vCreated);
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
	if (dd < 10) {
	dd = '0' + dd;
	}
	if (mm < 10) {
	mm = '0' + mm;
	}
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	var Newtoday = dd + '/' + mm + '/' + yyyy;
	return Newtoday ;
 }
  /*if(InvoiceNumber == null || InvoiceNumber == undefined || InvoiceNumber == '')
 {
     document.getElementById("panelshow").style.display = 'none';
     document.getElementById("showvendor").style.display = 'none';

}*/
 