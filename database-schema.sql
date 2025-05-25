-- Complete Database Schema with ALL fields from original APIs
-- ⚠️ BACKUP YOUR DATA BEFORE RUNNING THIS SCRIPT ⚠️

-- Drop existing tables if they exist (be careful in production!)
-- DROP TABLE IF EXISTS international_team_members;
-- DROP TABLE IF EXISTS domestic_team_members;
-- DROP TABLE IF EXISTS international_supervisors;
-- DROP TABLE IF EXISTS domestic_supervisors;
-- DROP TABLE IF EXISTS international_applications;
-- DROP TABLE IF EXISTS domestic_applications;
-- DROP TABLE IF EXISTS startup_domains;

-- Create startup domains lookup table
CREATE TABLE startup_domains (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- International Applications Table - ALL FIELDS FROM ORIGINAL
CREATE TABLE international_applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    
    -- Project Details - ALL FIELDS FROM ORIGINAL project_detail table
    idea_name VARCHAR(255) NOT NULL,
    slogan VARCHAR(500),
    startup_domain VARCHAR(255) NOT NULL,
    startup_domain_other VARCHAR(255),
    abstract TEXT NOT NULL,
    unmet_need TEXT NOT NULL,
    benefit TEXT,
    how_solution_works TEXT NOT NULL,
    who_are_competitors TEXT NOT NULL,
    
    -- Application Status - ALL FIELDS FROM ORIGINAL
    entry_date DATE,
    entry_time TIME,
    status_of_project VARCHAR(100),
    publish TINYINT(1) DEFAULT 0,
    shortlist TINYINT(1) DEFAULT 0,
    shortlist_stage2 TINYINT(1) DEFAULT NULL,
    display_stage2 TINYINT(1) DEFAULT NULL,
    shortlist_stage3 TINYINT(1) DEFAULT NULL,
    display_stage3 TINYINT(1) DEFAULT NULL,
    
    -- Project Classification - ALL FIELDS FROM ORIGINAL
    interschool_idea ENUM('yes', 'no') NOT NULL,
    need_expertises ENUM('yes', 'no') NOT NULL,
    project_is_fyp ENUM('yes', 'no') NOT NULL,
    
    -- Previous Applications - ALL FIELDS FROM ORIGINAL
    previously_applied_in_fics ENUM('yes', 'no') NOT NULL,
    previously_participating_year VARCHAR(10) DEFAULT NULL,
    previously_applied_project_title VARCHAR(255) DEFAULT NULL,
    previously_stage_reached VARCHAR(100) DEFAULT NULL,
    
    -- Other Competitions - ALL FIELDS FROM ORIGINAL
    participate_in_other_competition ENUM('yes', 'no') DEFAULT NULL,
    name_of_competition VARCHAR(255) DEFAULT NULL,
    prize_won VARCHAR(255) DEFAULT NULL,
    
    -- Additional Fields - ALL FIELDS FROM ORIGINAL
    beneficiary TEXT DEFAULT NULL,
    panel VARCHAR(100) DEFAULT NULL,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Indexes for performance
    INDEX idx_idea_name (idea_name),
    INDEX idx_entry_date (entry_date),
    INDEX idx_status (status_of_project),
    INDEX idx_shortlist (shortlist),
    INDEX idx_startup_domain (startup_domain),
    INDEX idx_created_at (created_at)
);

-- Domestic Applications Table - IDENTICAL STRUCTURE TO INTERNATIONAL
CREATE TABLE domestic_applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    
    -- Project Details - ALL FIELDS FROM ORIGINAL project_detail table
    idea_name VARCHAR(255) NOT NULL,
    slogan VARCHAR(500),
    startup_domain VARCHAR(255) NOT NULL,
    startup_domain_other VARCHAR(255),
    abstract TEXT NOT NULL,
    unmet_need TEXT NOT NULL,
    benefit TEXT,
    how_solution_works TEXT NOT NULL,
    who_are_competitors TEXT NOT NULL,
    
    -- Application Status - ALL FIELDS FROM ORIGINAL
    entry_date DATE,
    entry_time TIME,
    status_of_project VARCHAR(100),
    publish TINYINT(1) DEFAULT 0,
    shortlist TINYINT(1) DEFAULT 0,
    shortlist_stage2 TINYINT(1) DEFAULT NULL,
    display_stage2 TINYINT(1) DEFAULT NULL,
    shortlist_stage3 TINYINT(1) DEFAULT NULL,
    display_stage3 TINYINT(1) DEFAULT NULL,
    
    -- Project Classification - ALL FIELDS FROM ORIGINAL
    interschool_idea ENUM('yes', 'no') NOT NULL,
    need_expertises ENUM('yes', 'no') NOT NULL,
    project_is_fyp ENUM('yes', 'no') NOT NULL,
    
    -- Previous Applications - ALL FIELDS FROM ORIGINAL
    previously_applied_in_fics ENUM('yes', 'no') NOT NULL,
    previously_participating_year VARCHAR(10) DEFAULT NULL,
    previously_applied_project_title VARCHAR(255) DEFAULT NULL,
    previously_stage_reached VARCHAR(100) DEFAULT NULL,
    
    -- Other Competitions - ALL FIELDS FROM ORIGINAL
    participate_in_other_competition ENUM('yes', 'no') DEFAULT NULL,
    name_of_competition VARCHAR(255) DEFAULT NULL,
    prize_won VARCHAR(255) DEFAULT NULL,
    
    -- Additional Fields - ALL FIELDS FROM ORIGINAL
    beneficiary TEXT DEFAULT NULL,
    panel VARCHAR(100) DEFAULT NULL,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Indexes for performance
    INDEX idx_idea_name (idea_name),
    INDEX idx_entry_date (entry_date),
    INDEX idx_status (status_of_project),
    INDEX idx_shortlist (shortlist),
    INDEX idx_startup_domain (startup_domain),
    INDEX idx_created_at (created_at)
);

-- International Supervisors Table - ALL FIELDS FROM ORIGINAL supervisor_detail
CREATE TABLE international_supervisors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    application_id INT NOT NULL,
    
    -- Supervisor Details - ALL FIELDS FROM ORIGINAL
    name_of_supervisor VARCHAR(255) NOT NULL,
    supervisor_email VARCHAR(255) NOT NULL,
    supervisor_contact_number VARCHAR(20) DEFAULT NULL,
    supervisor_designation VARCHAR(255) NOT NULL,
    supervisor_uni VARCHAR(255) NOT NULL,
    supervisor_uni_school VARCHAR(255) DEFAULT NULL,
    supervisor_department VARCHAR(255) NOT NULL,
    expertises_detail TEXT DEFAULT NULL,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Foreign Keys and Constraints
    FOREIGN KEY (application_id) REFERENCES international_applications(id) ON DELETE CASCADE ON UPDATE CASCADE,
    
    -- Indexes
    INDEX idx_email (supervisor_email),
    INDEX idx_application (application_id),
    INDEX idx_university (supervisor_uni),
    INDEX idx_department (supervisor_department)
);

-- Domestic Supervisors Table - ALL FIELDS FROM ORIGINAL supervisor_detail
CREATE TABLE domestic_supervisors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    application_id INT NOT NULL,
    
    -- Supervisor Details - ALL FIELDS FROM ORIGINAL
    name_of_supervisor VARCHAR(255) NOT NULL,
    supervisor_email VARCHAR(255) NOT NULL,
    supervisor_contact_number VARCHAR(20) DEFAULT NULL,
    supervisor_designation VARCHAR(255) NOT NULL,
    supervisor_uni VARCHAR(255) NOT NULL,
    supervisor_uni_school VARCHAR(255) DEFAULT NULL,
    supervisor_department VARCHAR(255) NOT NULL,
    expertises_detail TEXT DEFAULT NULL,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Foreign Keys and Constraints
    FOREIGN KEY (application_id) REFERENCES domestic_applications(id) ON DELETE CASCADE ON UPDATE CASCADE,
    
    -- Indexes
    INDEX idx_email (supervisor_email),
    INDEX idx_application (application_id),
    INDEX idx_university (supervisor_uni),
    INDEX idx_department (supervisor_department)
);

-- International Team Members Table - ALL FIELDS FROM ORIGINAL team_detail
CREATE TABLE international_team_members (
    id INT PRIMARY KEY AUTO_INCREMENT,
    application_id INT NOT NULL,
    supervisor_id INT NOT NULL,
    
    -- Team Member Details - ALL FIELDS FROM ORIGINAL
    name VARCHAR(255) NOT NULL,
    university VARCHAR(255) NOT NULL,
    school VARCHAR(255) NOT NULL,
    year VARCHAR(10) NOT NULL,
    degree VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) DEFAULT NULL,
    gender VARCHAR(50) NOT NULL,
    province VARCHAR(100) DEFAULT NULL,
    cgpa VARCHAR(10) DEFAULT NULL,
    other_uni VARCHAR(255) DEFAULT NULL,
    other_nust_school VARCHAR(255) DEFAULT NULL,
    international_student ENUM('yes', 'no') DEFAULT 'yes',
    internationalcountry VARCHAR(100) DEFAULT NULL,
    country VARCHAR(100) DEFAULT NULL,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Foreign Keys and Constraints
    FOREIGN KEY (application_id) REFERENCES international_applications(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (supervisor_id) REFERENCES international_supervisors(id) ON DELETE CASCADE ON UPDATE CASCADE,
    
    -- Indexes
    INDEX idx_email (email),
    INDEX idx_application (application_id),
    INDEX idx_supervisor (supervisor_id),
    INDEX idx_university (university),
    INDEX idx_name (name),
    INDEX idx_international_student (international_student)
);

-- Domestic Team Members Table - ALL FIELDS FROM ORIGINAL team_detail
CREATE TABLE domestic_team_members (
    id INT PRIMARY KEY AUTO_INCREMENT,
    application_id INT NOT NULL,
    supervisor_id INT NOT NULL,
    
    -- Team Member Details - ALL FIELDS FROM ORIGINAL
    name VARCHAR(255) NOT NULL,
    university VARCHAR(255) NOT NULL,
    school VARCHAR(255) NOT NULL,
    year VARCHAR(10) NOT NULL,
    degree VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) DEFAULT NULL,
    gender VARCHAR(50) NOT NULL,
    province VARCHAR(100) DEFAULT NULL,
    cgpa VARCHAR(10) DEFAULT NULL,
    other_uni VARCHAR(255) DEFAULT NULL,
    other_nust_school VARCHAR(255) DEFAULT NULL,
    international_student ENUM('yes', 'no') DEFAULT 'no',
    internationalcountry VARCHAR(100) DEFAULT NULL,
    country VARCHAR(100) DEFAULT 'Pakistan',
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Foreign Keys and Constraints
    FOREIGN KEY (application_id) REFERENCES domestic_applications(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (supervisor_id) REFERENCES domestic_supervisors(id) ON DELETE CASCADE ON UPDATE CASCADE,
    
    -- Indexes
    INDEX idx_email (email),
    INDEX idx_application (application_id),
    INDEX idx_supervisor (supervisor_id),
    INDEX idx_university (university),
    INDEX idx_name (name),
    INDEX idx_international_student (international_student)
);

-- Insert common startup domains (matching your store values)
INSERT INTO startup_domains (name, description) VALUES
('no-poverty', 'Solutions addressing poverty and economic inequality'),
('zero-hunger', 'Food security and sustainable agriculture solutions'),
('good-health-and-well-being', 'Healthcare and wellness innovations'),
('quality-education', 'Educational technology and learning solutions'),
('gender-equality', 'Solutions promoting gender equality'),
('clean-water-and-sanitation', 'Water and sanitation technology'),
('affordable-and-clean-energy', 'Renewable energy and efficiency solutions'),
('decent-work-and-economic-growth', 'Employment and economic development'),
('industry-innovation-and-infrastructure', 'Industrial and infrastructure innovations'),
('reduced-inequalities', 'Solutions addressing social inequalities'),
('sustainable-cities-and-communities', 'Urban sustainability solutions'),
('responsible-consumption-and-production', 'Sustainable consumption patterns'),
('climate-action', 'Climate change mitigation and adaptation'),
('life-below-water', 'Marine conservation and ocean health'),
('life-on-land', 'Terrestrial ecosystem conservation'),
('peace-justice-and-strong-institutions', 'Governance and justice solutions'),
('partnerships-for-the-goals', 'Collaborative development solutions');

-- Create a view for unified reporting (optional but useful for analytics)
CREATE VIEW all_applications AS
SELECT 
    id,
    'international' as application_type,
    idea_name,
    slogan,
    startup_domain,
    startup_domain_other,
    abstract,
    unmet_need,
    benefit,
    how_solution_works,
    who_are_competitors,
    entry_date,
    entry_time,
    status_of_project,
    publish,
    shortlist,
    shortlist_stage2,
    display_stage2,
    shortlist_stage3,
    display_stage3,
    interschool_idea,
    need_expertises,
    project_is_fyp,
    previously_applied_in_fics,
    previously_participating_year,
    previously_applied_project_title,
    previously_stage_reached,
    participate_in_other_competition,
    name_of_competition,
    prize_won,
    beneficiary,
    panel,
    created_at,
    updated_at
FROM international_applications

UNION ALL

SELECT 
    id,
    'domestic' as application_type,
    idea_name,
    slogan,
    startup_domain,
    startup_domain_other,
    abstract,
    unmet_need,
    benefit,
    how_solution_works,
    who_are_competitors,
    entry_date,
    entry_time,
    status_of_project,
    publish,
    shortlist,
    shortlist_stage2,
    display_stage2,
    shortlist_stage3,
    display_stage3,
    interschool_idea,
    need_expertises,
    project_is_fyp,
    previously_applied_in_fics,
    previously_participating_year,
    previously_applied_project_title,
    previously_stage_reached,
    participate_in_other_competition,
    name_of_competition,
    prize_won,
    beneficiary,
    panel,
    created_at,
    updated_at
FROM domestic_applications;

-- Create a view for all supervisors (useful for reporting)
CREATE VIEW all_supervisors AS
SELECT 
    s.id,
    s.application_id,
    'international' as application_type,
    s.name_of_supervisor,
    s.supervisor_email,
    s.supervisor_contact_number,
    s.supervisor_designation,
    s.supervisor_uni,
    s.supervisor_uni_school,
    s.supervisor_department,
    s.expertises_detail,
    s.created_at,
    s.updated_at
FROM international_supervisors s

UNION ALL

SELECT 
    s.id,
    s.application_id,
    'domestic' as application_type,
    s.name_of_supervisor,
    s.supervisor_email,
    s.supervisor_contact_number,
    s.supervisor_designation,
    s.supervisor_uni,
    s.supervisor_uni_school,
    s.supervisor_department,
    s.expertises_detail,
    s.created_at,
    s.updated_at
FROM domestic_supervisors s;

-- Create a view for all team members (useful for reporting)
CREATE VIEW all_team_members AS
SELECT 
    t.id,
    t.application_id,
    t.supervisor_id,
    'international' as application_type,
    t.name,
    t.university,
    t.school,
    t.year,
    t.degree,
    t.email,
    t.mobile,
    t.gender,
    t.province,
    t.cgpa,
    t.other_uni,
    t.other_nust_school,
    t.international_student,
    t.internationalcountry,
    t.country,
    t.created_at,
    t.updated_at
FROM international_team_members t

UNION ALL

SELECT 
    t.id,
    t.application_id,
    t.supervisor_id,
    'domestic' as application_type,
    t.name,
    t.university,
    t.school,
    t.year,
    t.degree,
    t.email,
    t.mobile,
    t.gender,
    t.province,
    t.cgpa,
    t.other_uni,
    t.other_nust_school,
    t.international_student,
    t.internationalcountry,
    t.country,
    t.created_at,
    t.updated_at
FROM domestic_team_members t;

-- Add some useful stored procedures for common operations

-- Procedure to get complete application details
DELIMITER //
CREATE PROCEDURE GetCompleteApplication(
    IN app_type VARCHAR(20),
    IN app_id INT
)
BEGIN
    IF app_type = 'international' THEN
        SELECT 
            a.*,
            s.name_of_supervisor,
            s.supervisor_email,
            s.supervisor_contact_number,
            s.supervisor_designation,
            s.supervisor_uni,
            s.supervisor_uni_school,
            s.supervisor_department,
            s.expertises_detail
        FROM international_applications a
        LEFT JOIN international_supervisors s ON a.id = s.application_id
        WHERE a.id = app_id;
        
        SELECT * FROM international_team_members WHERE application_id = app_id;
    ELSE
        SELECT 
            a.*,
            s.name_of_supervisor,
            s.supervisor_email,
            s.supervisor_contact_number,
            s.supervisor_designation,
            s.supervisor_uni,
            s.supervisor_uni_school,
            s.supervisor_department,
            s.expertises_detail
        FROM domestic_applications a
        LEFT JOIN domestic_supervisors s ON a.id = s.application_id
        WHERE a.id = app_id;
        
        SELECT * FROM domestic_team_members WHERE application_id = app_id;
    END IF;
END //
DELIMITER ;

-- Procedure to get application statistics
DELIMITER //
CREATE PROCEDURE GetApplicationStats()
BEGIN
    SELECT 
        'international' as type,
        COUNT(*) as total_applications,
        SUM(shortlist) as shortlisted_applications,
        COUNT(DISTINCT DATE(created_at)) as application_days
    FROM international_applications
    
    UNION ALL
    
    SELECT 
        'domestic' as type,
        COUNT(*) as total_applications,
        SUM(shortlist) as shortlisted_applications,
        COUNT(DISTINCT DATE(created_at)) as application_days
    FROM domestic_applications;
END //
DELIMITER ;

-- Add triggers for automatic timestamp updates
DELIMITER //
CREATE TRIGGER international_applications_updated 
    BEFORE UPDATE ON international_applications
    FOR EACH ROW 
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END //

CREATE TRIGGER domestic_applications_updated 
    BEFORE UPDATE ON domestic_applications
    FOR EACH ROW 
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END //

CREATE TRIGGER international_supervisors_updated 
    BEFORE UPDATE ON international_supervisors
    FOR EACH ROW 
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END //

CREATE TRIGGER domestic_supervisors_updated 
    BEFORE UPDATE ON domestic_supervisors
    FOR EACH ROW 
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END //

CREATE TRIGGER international_team_members_updated 
    BEFORE UPDATE ON international_team_members
    FOR EACH ROW 
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END //

CREATE TRIGGER domestic_team_members_updated 
    BEFORE UPDATE ON domestic_team_members
    FOR EACH ROW 
BEGIN
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END //
DELIMITER ;

-- Verify the schema creation
SELECT 'Schema created successfully!' as status;

-- Show table information
SELECT 
    TABLE_NAME,
    TABLE_ROWS,
    DATA_LENGTH,
    INDEX_LENGTH
FROM information_schema.TABLES 
WHERE TABLE_SCHEMA = DATABASE() 
AND TABLE_NAME IN (
    'international_applications',
    'domestic_applications', 
    'international_supervisors',
    'domestic_supervisors',
    'international_team_members',
    'domestic_team_members',
    'startup_domains'
);
