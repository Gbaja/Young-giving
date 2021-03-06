const express = require("express");

const router = express.Router();

const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const updateProfile = require("./update_profile");
const directory = require("./directory");
const forgotPassword = require("./forgot_password");
const resetPassword = require("./reset_password");
const individualProfile = require("./individual_profile");
const deleteAccount = require("./delete_account");
const requestMentorship = require("./request_mentorship");
const newUniversity = require("./new_uni");
const allUniversities = require("./all_uni");
const pendingApplications = require("./pending_applications");
const pendingAction = require("./pending_action");
const pendingMentorRequests = require("./pending_requests_mentor");
const pendingMenteeRequests = require("./pending_requests_mentee");
const mentorshipRequest = require("./mentor_request_action");
const all = require("./all");

router.post("/api/signupMentor", signup.post);
router.post("/api/signupMentee", signup.post);
router.post("/api/login", login.post);
router.get("/api/logout", logout.get);
router.put("/api/updateProfile", updateProfile.put);
router.get(
  "/api/directory/:pageNum/:accountType/:universityName",
  directory.get
);
router.post("/api/forgotPassword", forgotPassword.post);
router.post("/api/resetPassword", resetPassword.post);
router.get("/api/profile/:id/:accountType", individualProfile.get);
router.delete("/api/delete", deleteAccount.delete);
router.get("/api/all/:universityName/:pageNumber", all.get);
router.post("/api/requestMentorship", requestMentorship.post);
router.post("/api/newUni", newUniversity.post);
router.get("/api/allUni", allUniversities.get);
router.get("/api/pending/:universityName", pendingApplications.get);
router.put("/api/pendingAction", pendingAction.put);
router.get("/api/pendingRequestsMentor", pendingMentorRequests.get);
router.get("/api/pendingRequestsMentee", pendingMenteeRequests.get);
router.put("/api/mentorshipRequest", mentorshipRequest.put);

module.exports = router;
