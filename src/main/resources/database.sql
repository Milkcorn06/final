create table
    users (
        id bigint primary key generated always as identity,
        username text not null unique,
        password text not null,
        email text not null unique,
        role text not null check (role in ('user', 'admin')),
        created_at timestamp
        with
            time zone default now (),
            is_active boolean default true,
            plan_id bigint references plans (id),
            is_verified boolean default false
    );

create table
    photos (
        id bigint primary key generated always as identity,
        user_id bigint references users (id),
        file_path text not null,
        uploaded_at timestamp
        with
            time zone default now (),
            is_public boolean default false,
            description text,
            edited_at timestamp
        with
            time zone
    );

create table
    messages (
        id bigint primary key generated always as identity,
        sender_id bigint references users (id),
        receiver_id bigint references users (id),
        content text,
        sent_at timestamp
        with
            time zone default now (),
            is_image boolean default false
    );

create table
    plans (
        id bigint primary key generated always as identity,
        name text not null,
        description text,
        price numeric(10, 2) not null,
        storage_limit bigint not null,
        image_quality text not null,
        created_at timestamp
        with
            time zone default now ()
    );
