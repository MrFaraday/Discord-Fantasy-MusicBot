CREATE TABLE IF NOT EXISTS guild (
    id varchar(255) NOT NULL,
    command_prefix varchar(10) NOT NULL,
    volume smallint NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS slot (
    id SERIAL,
    guild_id varchar(255) NOT NULL,
    slot_number smallint NOT NULL,
    value varchar(500) NOT NULL,
    name varchar(80),

    PRIMARY KEY (id),
    CONSTRAINT fk_guild
        FOREIGN KEY(guild_id)
	    REFERENCES guild(id)
);
