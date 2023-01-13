<h2>This Project Repository is a part of the Cloud Computing AAT.</h2><hr>

<h3>About the Project :</h3>
Here is the Project we build an Online Patient Management System for Doctors to maintain their Patient's Personal Information, Their Symptoms and their Covid Xray 
Report Details. This is build mostly using Artificial Intelligence.

<h3>Technologies Used :</h3>
<li>Frontend - HTML5, CSS3, Bootstrap5 </li>
<li>Backend and Database - Firebase, Tensorflow and DL</li>

<h3>Webapp Structure :</h3>
<li>1. Signup / Login as Doctor</li>
<li>2. Edit Profile of Doctor</li>
<li>3. Add New Patient</li>
<li>4. Each Doctor shall have his own set of Patients' list</li>
<li>5. Upload Patients Details that will be stored on the Database</li>
<li>6. Upload a Scanner X-Ray Report which will detect if the person has Covid or Not</li>
<li>7. Select Patients' Symptoms and that will detect the Patient's Disease</li>

<h3>Deployment / Hosting Process :</h3>

<li>This project is deployed from Docker Container to AWS via Elastic Container Registry. The pipeline used is attached below.</li>
<hr>

![pipeline](https://user-images.githubusercontent.com/118289908/211181687-0aa0e69c-8f69-4667-8ccf-426749d996cb.png)

<hr>
<li> 1. Building the Image and pushing it to "Docker container".</li>
<br>

![docker-container](https://user-images.githubusercontent.com/118289908/211181754-6c960786-95d2-4fcb-86cd-7f9f18fe39f9.png)

<hr>
<li> 2. Pushing the "Docker Container" to "Elastic Container Registry (ECR)".</li>
<br>

![ecr](https://user-images.githubusercontent.com/118289908/211181812-b842517e-3fe1-49a1-9d12-26d378dcf896.png)

<hr>
<li> 3. Launch the EC2 Instance and Deploy the Application.</li>
<br>

![ec2](https://user-images.githubusercontent.com/118289908/211181853-5cbfc462-283c-4dcb-a76c-9675d6395cbe.png)

<hr>
<li> 4. Finally, The Webapp is deployed and can be accessed using the Public DNS Address.</li>
<br>
<hr>

Link - <a href="http://44.211.70.37:8000/">http://44.211.70.37:8000//</a><hr>

