module.exports.typeDefs = [`
    type Query {
        scout(ScoutID: Int): Scout
        scouts: [Scout]
        eval(EvalID: String): Evaluation
        evals(ScoutID: Int, EvaluatorID: Int): [Evaluation]
        course(CourseID: Int): Course
        courses: [Course]
        activity(CourseID: Int): [Activity]
    }
    type Scout {
        ScoutID: Int,
        FirstName: String,
        LastName: String,
        Birthdate: String,
        Gender: String,
        
`];